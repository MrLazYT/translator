import { Pressable, StyleSheet, Text } from "react-native";
import { LanguageOptionProps } from "../../types/componentTypes";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSourceLangCode,
    selectTargetLangCode,
    setSourceLang,
    setTargetLang,
} from "../../app/slices/languageSelectorSlice";

export default function LanguageOption({ isSource, langCode, langNameEn, langNameUk }: LanguageOptionProps) {
    const router = useRouter();
    const dispatch = useDispatch();
    const setLang = isSource ? setSourceLang : setTargetLang;
    const selectedLangCode = useSelector(isSource ? selectSourceLangCode : selectTargetLangCode);
    const isSelected = langCode == selectedLangCode;

    const onPressHandle = () => {
        dispatch(setLang({ langCode, langNameEn, langNameUk }));
        router.back();
    };

    return (
        <Pressable onPress={onPressHandle} style={isSelected ? styles.selectedOption : styles.option}>
            <Text style={styles.optionText}>{langNameEn}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    option: {
        padding: 20,
        backgroundColor: "#1E1E1E",
        borderTopColor: "#444444",
        borderBottomColor: "#444444",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        verticalAlign: "top",
    },

    selectedOption: {
        padding: 20,
        backgroundColor: "#2A2A2A",
        borderTopColor: "#555555",
        borderBottomColor: "#555555",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        verticalAlign: "top",
    },

    optionText: {
        fontSize: 20,
        color: "#E4E4E4",
    },
});
