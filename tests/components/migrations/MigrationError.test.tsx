import { render } from "@testing-library/react-native";
import MigrationError from "../../../components/migrations/MigrationError";

describe("MigrationError", () => {
    let view;
    const error = Error("Test error");

    beforeEach(() => {
        jest.clearAllMocks();

        view = render(<MigrationError error={error} />);
    });

    it("renders correctly", () => {
        expect(view!).toBeTruthy();
    });

    it("should contain text error message", () => {
        const { getByText } = view!;

        const errorTitle = getByText(`Migration error: ${error.message}`);

        expect(errorTitle).toBeTruthy();
    });
});
