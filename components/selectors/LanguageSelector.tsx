import { StyleSheet, View } from "react-native";
import LanguageLabel from "../labels/LanguageLabel";
import SwitchLangButton from "../buttons/SwitchLangButton";

export default function LanguageSelector() {
    return (
        <View style={styles.languageSelectorContainer}>
            <LanguageLabel testID="src-lang-lbl" isSource={true} />
            <SwitchLangButton />
            <LanguageLabel testID="trg-lang-lbl" isSource={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    languageSelectorContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
