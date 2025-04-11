import { CircleImageButtonProps } from "../../types/componentTypes";
import CircleImageButton from "./CircleImageButton";

export default function SwitchLangButton({ onPress }: CircleImageButtonProps) {
    return <CircleImageButton source={require("../../assets/change-language-icon.png")} onPress={onPress} />;
}
