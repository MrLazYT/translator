import { StyleSheet, Text } from "react-native";
import { LanguageLabelProps } from "../../types/componentTypes";
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import { selectSourceLangNameEn, selectTargetLangNameEn } from "../../app/slices/languageSelectorSlice";

export default function LanguageLabel({ isSource }: LanguageLabelProps) {
    const selectedLanguage = useSelector(isSource ? selectSourceLangNameEn : selectTargetLangNameEn);

    return (
        <Link href={{ pathname: "/selectLanguageModal", params: { isSource: String(isSource) } }} asChild>
            <Text style={isSource ? styles.languageSelectorSource : styles.languageSelectorTarget}>
                {selectedLanguage}
            </Text>
        </Link>
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
