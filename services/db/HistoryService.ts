import { eq } from "drizzle-orm";
import { db } from "./dbService";
import { historyTable } from "../../db/schema";

export default class HistoryService {
    static async create(item: HistoryItem) {
        await db.insert(historyTable).values(item);
    }

    static async getById(id: number): Promise<typeof historyTable.$inferSelect | undefined> {
        const result = await db.select().from(historyTable).where(eq(historyTable.id, id));

        return result.length > 0 ? result[0] : undefined;
    }

    static async getAll(): Promise<(typeof historyTable.$inferSelect)[] | []> {
        const result = await db.select().from(historyTable);

        return result.length > 0 ? result : [];
    }

    static async update(item: typeof historyTable.$inferSelect) {
        await db.update(historyTable).set(item).where(eq(historyTable.id, item.id));
    }

    static async delete(id: number) {
        await db.delete(historyTable).where(eq(historyTable.id, id));
    }

    static async deleteAll() {
        await db.delete(historyTable);
    }
}
