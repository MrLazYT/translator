import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import TargetTextOutput from "../../components/textOutputs/TextOutput";
import SourceTextInput from "../../components/textInputs/SourceTextInput";
import LanguageSelector from "../../components/selectors/LanguageSelector";
import { updateTranslation } from "../../services/api/translator";
import { useSelector } from "react-redux";
import { selectSourceLangCode, selectTargetLangCode } from "../slices/languageSelectorSlice";
import useUpdateTranslation from "../../hooks/useUpdateTranslation";

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
