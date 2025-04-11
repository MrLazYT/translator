import { Text, View, StyleSheet, FlatList } from "react-native";
import { historyTable } from "../../db/schema";
import { useEffect, useState } from "react";
import MigrationError from "../../components/migrations/MigrationError";
import MigrationInProgress from "../../components/migrations/MigrationInProgress";
import TranslationCard from "../../components/cards/TranslationCard";
import HistoryService from "../../services/db/HistoryService";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../drizzle/migrations";
import { db } from "../../services/db/dbService";
import { useNavigation } from "expo-router";

export default function History() {
    const { success, error } = useMigrations(db, migrations);
    const [items, setItems] = useState<(typeof historyTable.$inferSelect)[] | null>(null);
    const navigation = useNavigation();
    const isFocused = navigation.isFocused();

    async function update() {
        const taskList = await HistoryService.getAll();

        setItems(taskList);
    }

    useEffect(() => {
        (async () => {
            await update();
        })();
    }, [isFocused]);

    if (error) {
        return <MigrationError error={error} />;
    }

    if (!success) {
        return <MigrationInProgress />;
    }

    const onRemove = (id: number) => {
        if (!items) return;

        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    };

    return (
        <View style={styles.container}>
            {items === null || items.length === 0 ? (
                <Text style={styles.text}>There's no translations yet</Text>
            ) : (
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <TranslationCard
                            id={item.id}
                            sourceText={item.sourceText}
                            targetText={item.targetText}
                            onRemove={onRemove}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
    text: {
        color: "#E4E4E4",
        fontSize: 20,
    },
});
