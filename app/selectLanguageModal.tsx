import { FlatList, StyleSheet, View } from "react-native";
import LanguageOption from "../components/options/LanguageOption";
import { useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { selectSourceLangCode, selectTargetLangCode } from "./slices/languageSelectorSlice";

export default function SelectLanguageModal() {
    const languages: LanguageType[] = require("../assets/data/languages.json");

    const { isSource } = useLocalSearchParams();
    const isSourceBoolean = isSource == "true";
    const selectedLangCode = useSelector(isSourceBoolean ? selectTargetLangCode : selectSourceLangCode);

    const filteredLanguages = languages.filter((lang) => {
        if (lang.lang_code === selectedLangCode) return false;
        if (!isSourceBoolean && lang.lang_code === "auto") return false;
        return true;
    });

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredLanguages}
                keyExtractor={(item: LanguageType) => item.lang_code}
                renderItem={({ item }: { item: LanguageType }) => (
                    <LanguageOption
                        isSource={isSourceBoolean}
                        langCode={item.lang_code}
                        langNameEn={item.lang_name_en}
                        langNameUk={item.lang_name_uk}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
    },
});
