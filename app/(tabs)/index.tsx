import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import TargetTextOutput from "../../components/textOutputs/TextOutput";
import SourceTextInput from "../../components/textInputs/SourceTextInput";
import LanguageSelector from "../../components/selectors/LanguageSelector";
import HistoryService from "../../services/db/HistoryService";
import translate from "../../services/api/translator";

export default function Index() {
    const [sourceLang, setSourceLang] = useState<string>("auto");
    const [targetLang, setTargetLang] = useState<string>("uk");
    const [sourceText, setSourceText] = useState<string>("");
    const [translatedText, setTranslatedText] = useState<string>("Translated text...");
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const onChangeTextHandler = async (value: string) => {
        setSourceText(value);

        const translation = await translate({
            text: value,
            source: sourceLang,
            target: targetLang,
        });

        setTranslatedText(translation);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(async () => {
            if (sourceText !== "" || translation !== "") {
                await HistoryService.create({
                    sourceText: value,
                    targetText: translation,
                    sourceLang: sourceLang,
                    targetLang: targetLang,
                });
            }
        }, 3000);
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
