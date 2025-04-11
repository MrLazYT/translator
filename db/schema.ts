import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const historyTable = sqliteTable("history_table", {
    id: int().primaryKey({ autoIncrement: true }),
    sourceText: text().notNull(),
    targetText: text().notNull(),
    sourceLang: text().notNull(),
    targetLang: text().notNull(),
});
