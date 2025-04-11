import HistoryService from "../../../services/db/HistoryService";
import { historyTable } from "../../../db/schema";

jest.mock("expo-sqlite");
jest.mock("drizzle-orm/expo-sqlite");

describe("HistoryService", () => {
    const mockItem: typeof historyTable.$inferSelect = {
        id: 1,
        sourceText: "Hello",
        targetText: "Привіт",
        sourceLang: "en",
        targetLang: "uk",
    };
    const mockItems: (typeof historyTable.$inferSelect)[] = [mockItem];
    const updatedMockItem: typeof historyTable.$inferSelect = {
        id: 1,
        sourceText: "Hi",
        targetText: "Привіт",
        sourceLang: "en",
        targetLang: "uk",
    };
    const createMock = jest.spyOn(HistoryService, "create").mockResolvedValue(undefined);
    const getByIdMock = jest.spyOn(HistoryService, "getById").mockResolvedValue(mockItem);
    const getAllMock = jest.spyOn(HistoryService, "getAll").mockResolvedValue([mockItem]);
    const updateMock = jest.spyOn(HistoryService, "update").mockResolvedValue(undefined);
    const deleteMock = jest.spyOn(HistoryService, "delete").mockResolvedValue(undefined);

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should create item correctly", async () => {
        await HistoryService.create(mockItem);

        const allItems = await HistoryService.getAll();

        expect(createMock).toHaveBeenCalledWith(mockItem);
        expect(allItems).toContainEqual(mockItem);
    });

    it("should return item by id correctly", async () => {
        const result = await HistoryService.getById(1);

        expect(getByIdMock).toHaveBeenCalledWith(1);
        expect(result).toEqual(mockItem);
    });

    it("should return all items correctly", async () => {
        const result = await HistoryService.getAll();

        expect(getAllMock).toHaveBeenCalled();
        expect(result).toEqual(mockItems);
    });

    it("should update all items correctly", async () => {
        let result = await HistoryService.getById(1);

        expect(result).toEqual(mockItem);

        await HistoryService.update(updatedMockItem);

        expect(updateMock).toHaveBeenCalledWith(updatedMockItem);

        getByIdMock.mockResolvedValue(updatedMockItem);

        result = await HistoryService.getById(1);

        expect(result).toEqual(updatedMockItem);
    });

    it("should delete item by id", async () => {
        let result = await HistoryService.getAll();

        expect(result).toEqual(mockItems);

        await HistoryService.delete(1);

        expect(deleteMock).toHaveBeenCalledWith(1);

        getAllMock.mockResolvedValue([]);

        result = await HistoryService.getAll();

        expect(result).toEqual([]);
    });
});
