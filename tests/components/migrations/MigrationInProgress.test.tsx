import { render } from "@testing-library/react-native";
import MigrationInProgress from "../../../components/migrations/MigrationInProgress";

describe("MigrationInProgress", () => {
    let view;

    beforeEach(() => {
        view = render(<MigrationInProgress />);
    });

    it("renders correctly", () => {
        expect(view!).toBeTruthy();
    });

    it("should contain text: 'Migration is in progress...'", () => {
        const { getByText } = view!;

        const migrationInProgressTitle = getByText("Migrations is in progress...");

        expect(migrationInProgressTitle).toBeTruthy();
    });
});
