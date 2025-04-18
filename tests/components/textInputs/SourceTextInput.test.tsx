import { render } from "@testing-library/react-native";
import SourceTextInput from "../../../components/textInputs/SourceTextInput";

describe("SourceTextInput", () => {
    test("Renders correctly", () => {
        const onChangeText = jest.fn();

        const { getByPlaceholderText } = render(<SourceTextInput sourceText="" onChangeText={onChangeText} />);

        const textInput = getByPlaceholderText("Enter the text you want to translate");

        expect(textInput).toBeTruthy();
    });
});
