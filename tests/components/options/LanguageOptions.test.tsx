import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { fireEvent, render } from "@testing-library/react-native";
import LanguageOption, { styles } from "../../../components/options/LanguageOption";

jest.mock("expo-router", () => ({
    useRouter: jest.fn(),
}));

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

const mockDispatch = jest.fn();
const mockBack = jest.fn();

describe("LanguageOption", () => {
    let option;
    const props1 = {
        isSource: true,
        langCode: "it",
        langNameEn: "Italy",
        langNameUk: "Італійська",
    };
    const props2 = {
        isSource: false,
        langCode: "en",
        langNameEn: "English",
        langNameUk: "Англійська",
    };

    const sourceLangCode = "en";
    const targetLangCode = "uk";

    beforeEach(() => {
        jest.clearAllMocks();

        (useRouter as jest.Mock).mockReturnValue({ back: mockBack });
        (useSelector as unknown as jest.Mock).mockReturnValue(props1.isSource ? targetLangCode : sourceLangCode);
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);

        option = render(
            <LanguageOption
                isSource={props1.isSource}
                langCode={props1.langCode}
                langNameEn={props1.langNameEn}
                langNameUk={props1.langNameUk}
            />
        );
    });

    it("renders correctly", () => {
        expect(option!).toBeTruthy();
    });

    it("renders correctly if isSource is false", () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(props2.isSource ? targetLangCode : sourceLangCode);

        option = render(
            <LanguageOption
                isSource={props2.isSource}
                langCode={props2.langCode}
                langNameEn={props2.langNameEn}
                langNameUk={props2.langNameUk}
            />
        );

        expect(option).toBeTruthy();
    });

    it("isSelected boolean variable should be true", () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(props2.isSource ? targetLangCode : sourceLangCode);

        option = render(
            <LanguageOption
                isSource={props2.isSource}
                langCode={props2.langCode}
                langNameEn={props2.langNameEn}
                langNameUk={props2.langNameUk}
            />
        );

        const { getByTestId } = option!;

        const pressable = getByTestId("opt-prs");

        const pressableStyle = pressable.props.style;

        expect(pressableStyle).toBe(styles.selectedOption);
    });

    it("isSelected boolean variable should be false", () => {
        const { getByTestId } = option!;

        const pressable = getByTestId("opt-prs");

        const pressableStyle = pressable.props.style;

        expect(pressableStyle).toBe(styles.option);
    });

    it("should return to the previous screen by pressing", () => {
        const { getByTestId } = option!;

        const pressable = getByTestId("opt-prs");

        fireEvent.press(pressable);

        expect(mockBack).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
});
