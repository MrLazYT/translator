import { StyleSheet, View } from "react-native";
import LanguageLabel from "../labels/LanguageLabel";
import SwitchLangButton from "../buttons/SwitchLangButton";

export default function LanguageSelector() {
    return (
        <View style={styles.languageSelectorContainer}>
            <LanguageLabel onPress={() => {}} isSource={true} label="English" />
            <SwitchLangButton />
            <LanguageLabel onPress={() => {}} isSource={false} label="Ukrainian" />
        </View>
    );
}

const styles = StyleSheet.create({
    languageSelectorContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});
