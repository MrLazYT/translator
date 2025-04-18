import ImageButton from "./ImageButton";
import { CustomImageButtonProps } from "../../types/componentTypes";

export default function CopyButton({ testID, onPress }: CustomImageButtonProps) {
    return <ImageButton testID={testID} source={require("../../assets/copy-icon.png")} onPress={onPress} />;
}
