import { fireEvent, render } from "@testing-library/react-native";
import CopyButton from "../../../components/buttons/CopyButton";

describe("CopyButton", () => {
    const onPress = jest.fn();
    let btn;

    beforeEach(() => {
        btn = render(<CopyButton onPress={onPress} />);
    });

    it("Renders correctly", () => {
        expect(btn!).toBeTruthy();
    });

    it("Is Pressable", () => {
        const { getByTestId } = btn!;

        fireEvent.press(getByTestId("image-btn"));

        expect(onPress).toHaveBeenCalled();
    });
});
