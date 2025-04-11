import { CustomImageButtonProps } from "../../types/componentTypes";
import ImageButton from "./ImageButton";

export default function CopyButton({ testID, onPress }: CustomImageButtonProps) {
    return <ImageButton testID={testID} source={require("../../assets/copy-icon.png")} onPress={onPress} />;
}
