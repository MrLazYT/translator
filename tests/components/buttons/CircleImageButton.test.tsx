import { fireEvent, render } from "@testing-library/react-native";
import CircleImageButton from "../../../components/buttons/CircleImageButton";

describe("CircleImageButton", () => {
    const onPress = jest.fn();
    const source = require("../../../assets/copy-icon.png");

    let btn;

    beforeEach(() => {
        btn = render(<CircleImageButton source={source} onPress={onPress} />);
    });

    it("renders correctly", () => {
        expect(btn!).toBeTruthy();
    });

    it("image should contain source", () => {
        const { getByTestId } = btn!;
        const image = getByTestId("crl-img");
        const imageSource = image.props.source;

        expect(imageSource).toEqual(source);
    });

    it("should be pressable", () => {
        const { getByTestId } = btn!;
        const pressable = getByTestId("crl-prs");

        fireEvent.press(pressable);

        expect(onPress).toHaveBeenCalledTimes(1);
    });
});
