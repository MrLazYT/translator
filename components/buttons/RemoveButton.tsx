import { CustomImageButtonProps } from "../../types/componentTypes";
import ImageButton from "./ImageButton";

export default function RemoveButton({ testID, onPress }: CustomImageButtonProps) {
    return <ImageButton testID={testID} source={require("../../assets/remove-icon.png")} onPress={onPress} />;
}
