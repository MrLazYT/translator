import { useEffect, useState } from "react";
import { historyTable } from "../db/schema";
import { useNavigation } from "expo-router";
import HistoryService from "../services/db/HistoryService";

export default function useTasks() {
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

    return items;
}
