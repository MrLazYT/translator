import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { updateTranslation } from "../../services/api/translator";
import useUpdateTranslation from "../../hooks/useUpdateTranslation";
import SourceTextInput from "../../components/textInputs/SourceTextInput";
import LanguageSelector from "../../components/selectors/LanguageSelector";
import TargetTextOutput from "../../components/textOutputs/TargetTextOutput";
import { selectSourceLangCode, selectTargetLangCode } from "../slices/languageSelectorSlice";

export default function Index() {
    const sourceLangCode = useSelector(selectSourceLangCode);
    const targetLangCode = useSelector(selectTargetLangCode);
    const [sourceText, setSourceText] = useState<string>("");
    const [translatedText, setTranslatedText] = useState<string>("Translated text...");
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useUpdateTranslation(sourceText, sourceLangCode, targetLangCode, setTranslatedText, typingTimeoutRef);

    const onChangeTextHandler = async (value: string) => {
        setSourceText(value);
        console.log(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            updateTranslation(value, sourceLangCode, targetLangCode, setTranslatedText, typingTimeoutRef);
        }, 500);
    };

    return (
        <View style={styles.container}>
            <SourceTextInput sourceText={sourceText} onChangeText={onChangeTextHandler} />
            <LanguageSelector />
            <TargetTextOutput targetText={translatedText} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000000",
    },
});
