import { render } from "@testing-library/react-native";
import LanguageSelector from "../../../components/selectors/LanguageSelector";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe("LanguageSelector", () => {
    let view;

    beforeEach(() => {
        view = render(<LanguageSelector />);
    });

    it("renders correctly", () => {
        expect(view!).toBeTruthy();
    });

    it("should contain source language label", () => {
        const { getByTestId } = view!;

        const languageLabel = getByTestId("src-lang-lbl");

        expect(languageLabel).toBeTruthy();
    });

    it("should contain target language label", () => {
        const { getByTestId } = view!;

        const languageLabel = getByTestId("trg-lang-lbl");

        expect(languageLabel).toBeTruthy();
    });

    it("should contain SwitchLangButton component", () => {
        const { getByTestId } = view!;

        const switchLangBtn = getByTestId("crl-prs");

        expect(switchLangBtn).toBeTruthy();
    });
});
