import { Pressable, StyleSheet, Text } from "react-native";
import { LanguageLabelProps } from "../../types/componentTypes";

export default function LanguageLabel({ onPress, isSource, label }: LanguageLabelProps) {
    return (
        <Pressable onPress={onPress}>
            <Text style={isSource ? styles.languageSelectorSource : styles.languageSelectorTarget}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    languageSelectorSource: {
        width: 2000,
        color: "#E4E4E4",
        fontSize: 20,
        textAlign: "right",
    },
    languageSelectorTarget: {
        width: 2000,
        color: "#E4E4E4",
        fontSize: 20,
    },
});
