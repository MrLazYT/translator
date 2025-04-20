import { render } from "@testing-library/react-native";
import TargetTextOutput from "../../../components/textOutputs/TargetTextOutput";

describe("TargetTextOutput", () => {
    let text;
    const targetText = "Test target text";

    beforeEach(() => {
        text = render(<TargetTextOutput targetText={targetText} />);
    });

    it("renders correctly", () => {
        expect(text!).toBeTruthy();
    });

    it("should contain target text data", () => {
        const { getByText } = text!;

        const textOutput = getByText(targetText);

        expect(textOutput).toBeTruthy();
    });
});
