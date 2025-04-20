import { useSelector } from "react-redux";
import { fireEvent, render } from "@testing-library/react-native";
import LanguageLabel from "../../../components/labels/LanguageLabel";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock("expo-router", () => {
    const React = require("react");
    return {
        Link: ({ href, children }: any) =>
            React.cloneElement(children, {
                onPress: () => mockNavigate(href),
                testID: "language-label-link",
            }),
    };
});

describe("LanguageLabel", () => {
    const langNameEn = "English";
    const langNameOther = "Ukrainian";
    let label;

    beforeEach(() => {
        (useSelector as unknown as jest.Mock).mockReturnValue(langNameEn);

        label = render(<LanguageLabel isSource={true} />);
    });

    it("renders correctly", () => {
        expect(label!).toBeTruthy();
    });

    it("contains a text with language name", () => {
        const { getByText } = label!;

        const labelTitle = getByText(langNameEn);

        expect(labelTitle).toBeTruthy();
    });

    it("renders correctly when isSource is true", () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(langNameEn);

        const { getByText } = render(<LanguageLabel isSource={true} />);

        expect(getByText(langNameEn)).toBeTruthy();
    });

    it("navigates to correct screen with isSource=true", () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(langNameEn);

        const { getByText } = render(<LanguageLabel isSource={true} />);

        fireEvent.press(getByText(langNameEn));

        expect(mockNavigate).toHaveBeenCalledWith({
            pathname: "/selectLanguageModal",
            params: { isSource: "true" },
        });
    });

    it("renders correctly when isSource is false", () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(langNameOther);

        const { getByText } = render(<LanguageLabel isSource={false} />);

        expect(getByText(langNameOther)).toBeTruthy();
    });

    it("navigates to correct screen with isSource=false", () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(langNameOther);

        const { getByText } = render(<LanguageLabel isSource={false} />);

        fireEvent.press(getByText(langNameOther));

        expect(mockNavigate).toHaveBeenCalledWith({
            pathname: "/selectLanguageModal",
            params: { isSource: "false" },
        });
    });
});
