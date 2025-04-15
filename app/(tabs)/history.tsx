import { Text, View, StyleSheet, FlatList } from "react-native";
import { historyTable } from "../../db/schema";
import { useCallback, useEffect, useState } from "react";
import MigrationError from "../../components/migrations/MigrationError";
import MigrationInProgress from "../../components/migrations/MigrationInProgress";
import TranslationCard from "../../components/cards/TranslationCard";
import HistoryService from "../../services/db/HistoryService";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../../drizzle/migrations";
import { db } from "../../services/db/dbService";
import { useFocusEffect, useNavigation } from "expo-router";

export default function History() {
    const { success, error } = useMigrations(db, migrations);
    const [items, setItems] = useState<(typeof historyTable.$inferSelect)[] | null>(null);
    const navigation = useNavigation();
    const isFocused = navigation.isFocused();

    async function update() {
        const taskList = await HistoryService.getAll();

        setItems(taskList);
    }

    useFocusEffect(
        useCallback(() => {
            update();
        }, [])
    );

    const onRemove = useCallback((id: number) => {
        setItems((prevItems) => prevItems?.filter((item) => item.id !== id) ?? null);
    }, []);

    const renderItem = useCallback(
        ({ item }: any) => (
            <TranslationCard
                id={item.id}
                sourceText={item.sourceText}
                targetText={item.targetText}
                onRemove={onRemove}
            />
        ),
        [items]
    );

    if (error) {
        return <MigrationError error={error} />;
    }

    if (!success) {
        return <MigrationInProgress />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            {items === null || items.length === 0 ? (
                <Text style={styles.text}>There's no translations yet</Text>
            ) : (
                <FlatList
                    data={items}
                    windowSize={5}
                    removeClippedSubviews={true}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    onEndReachedThreshold={0.5}
                    renderItem={renderItem}
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
    title: {
        margin: 10,
        color: "#E4E4E4",
        textAlign: "center",
        fontSize: 24,
    },
    text: {
        color: "#E4E4E4",
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: 20,
    },
});
