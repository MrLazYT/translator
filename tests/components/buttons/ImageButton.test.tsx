import { fireEvent, render } from "@testing-library/react-native";
import ImageButton from "../../../components/buttons/ImageButton";

describe("ImageButton", () => {
    const image = require("../../../assets/copy-icon.png");
    const onPress = jest.fn();

    let btn;

    beforeEach(() => {
        btn = render(<ImageButton source={image} onPress={onPress} />);
    });

    it("Renders correctly", () => {
        expect(btn!).toBeTruthy();
    });

    it("Is pressable", () => {
        const { getByTestId } = btn!;

        fireEvent.press(getByTestId("image-btn"));

        expect(onPress).toHaveBeenCalled();
    });
});
