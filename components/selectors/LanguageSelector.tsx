import { StyleSheet, View } from "react-native";
import LanguageLabel from "../labels/LanguageLabel";
import SwitchLangButton from "../buttons/SwitchLangButton";
import { LanguageSelectorProps } from "../../types/componentTypes";

export default function LanguageSelector() {
    return (
        <View style={styles.languageSelectorContainer}>
            <LanguageLabel isSource={true} />
            <SwitchLangButton />
            <LanguageLabel isSource={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    languageSelectorContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
