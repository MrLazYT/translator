import { fireEvent, render } from "@testing-library/react-native";
import RemoveButton from "../../../components/buttons/RemoveButton";

describe("RemoveButton", () => {
    const onPress = jest.fn();
    let btn;

    beforeEach(() => {
        btn = render(<RemoveButton onPress={onPress} />);
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
