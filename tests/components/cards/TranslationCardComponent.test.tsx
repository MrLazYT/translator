import { fireEvent, render, waitFor } from "@testing-library/react-native";
import TranslationCard from "../../../components/cards/TranslationCard";
import * as Clipboard from "expo-clipboard";
import HistoryService from "../../../services/db/HistoryService";

const sourceText = "Hello";
const targetText = "Привіт";

let card;

jest.mock("expo-sqlite", () => ({
    openDatabaseSync: jest.fn(() => ({
        executeSql: jest.fn(),
    })),
}));

jest.mock("expo-clipboard", () => ({
    setStringAsync: jest.fn(),
    getStringAsync: jest.fn(() => Promise.resolve(targetText)),
}));

jest.mock("../../../services/db/HistoryService");

const onRemove = jest.fn();

describe("TranslationComponent", () => {
    beforeEach(() => {
        card = render(<TranslationCard id={1} sourceText={sourceText} targetText={targetText} onRemove={onRemove} />);
    });

    it("Renders correctly", () => {
        expect(card!).toBeTruthy();
    });

    it("Has a source text", () => {
        const { getByText } = card!;

        expect(getByText(sourceText)).toBeTruthy();
    });

    it("expands and shows translation on press", () => {
        const { getByText, queryByText } = card!;

        expect(queryByText(targetText)).toBeNull();

        fireEvent.press(getByText(sourceText));

        expect(getByText(targetText)).toBeTruthy();
    });

    it("Has a copy button", () => {
        const { getByText, getByTestId } = card!;

        fireEvent.press(getByText(sourceText));

        expect(getByTestId("copy-btn")).toBeTruthy();
    });

    it("Has a delete button", () => {
        const { getByText, getByTestId } = card!;

        fireEvent.press(getByText(sourceText));

        expect(getByTestId("remove-btn")).toBeTruthy();
    });

    it("Copy button is hidden", () => {
        const { queryByTestId } = card!;

        expect(queryByTestId("copy-btn")).toBeNull();
    });

    it("copies text to clipboard", () => {
        const { getByText, getByTestId } = card!;

        fireEvent.press(getByText(sourceText));

        const copyBtn = getByTestId("copy-btn");

        fireEvent.press(copyBtn);

        expect(Clipboard.setStringAsync).toHaveBeenCalledWith(targetText);
    });

    it("text copied to clipboard", async () => {
        const copiedText = await Clipboard.getStringAsync();

        expect(copiedText).toBe(targetText);
    });

    it("remove button is hidden", () => {
        const { queryByTestId } = card!;

        expect(queryByTestId("remove-btn")).toBeNull();
    });

    it("remove button removes card", async () => {
        const { queryByTestId, getByText } = card!;

        fireEvent.press(getByText(sourceText));

        const removeBtn = queryByTestId("remove-btn");

        fireEvent.press(removeBtn);

        await waitFor(() => expect(HistoryService.delete).toHaveBeenCalledWith(1));

        expect(onRemove).toHaveBeenCalledWith(1);
    });
});
