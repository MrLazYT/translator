import { Image, Pressable } from "react-native";
import { CustomImageButtonProps } from "../../types/componentTypes";

export default function ImageButton({ source, onPress, testID = "image-btn" }: CustomImageButtonProps) {
    return (
        <Pressable testID={testID} onPress={onPress}>
            <Image source={source} />
        </Pressable>
    );
}
