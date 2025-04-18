import { fireEvent, render } from "@testing-library/react-native";
import SwitchLangButton from "../../../components/buttons/SwitchLangButton";
import { useDispatch, useSelector } from "react-redux";
import { setSourceLang, setTargetLang } from "../../../app/slices/languageSelectorSlice";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();

describe("SwitchLangButton", () => {
    let btn;

    beforeEach(() => {
        jest.clearAllMocks();

        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

        (useSelector as unknown as jest.Mock)
            .mockReturnValueOnce("en")
            .mockReturnValueOnce("English")
            .mockReturnValueOnce("Англійська")
            .mockReturnValueOnce("uk")
            .mockReturnValueOnce("Ukrainian")
            .mockReturnValueOnce("Українська");

        btn = render(<SwitchLangButton />);
    });

    it("renders correctly", () => {
        expect(btn!).toBeTruthy();
    });

    it("doesn't switch the language when set to 'auto'", () => {
        (useSelector as unknown as jest.Mock)
            .mockReturnValueOnce("auto")
            .mockReturnValueOnce("Auto Detect")
            .mockReturnValueOnce("Визначити автоматично")
            .mockReturnValueOnce("uk")
            .mockReturnValueOnce("Ukrainian")
            .mockReturnValueOnce("Українська");

        btn = render(<SwitchLangButton />);

        const { getByTestId } = btn!;
        const pressable = getByTestId("crl-prs");

        fireEvent.press(pressable);

        expect(mockDispatch).toHaveBeenCalledTimes(0);
        expect(mockDispatch).toHaveBeenCalledTimes(0);
    });

    it("switches languages", () => {
        const { getByTestId } = btn!;
        const pressable = getByTestId("crl-prs");

        fireEvent.press(pressable);

        expect(mockDispatch).toHaveBeenCalledWith(
            setSourceLang({
                langCode: "uk",
                langNameEn: "Ukrainian",
                langNameUk: "Українська",
            })
        );
        expect(mockDispatch).toHaveBeenCalledWith(
            setTargetLang({
                langCode: "en",
                langNameEn: "English",
                langNameUk: "Англійська",
            })
        );
    });
});
