CREATE TABLE `history_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sourceText` text NOT NULL,
	`targetText` text NOT NULL,
	`sourceLang` text NOT NULL,
	`targetLang` text NOT NULL
);
