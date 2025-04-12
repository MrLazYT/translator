import { FlatList, View } from "react-native";
import LanguageOption from "../components/options/LanguageOption";
import { useLocalSearchParams } from "expo-router";

export default function SelectLanguageModal() {
    const languages: LanguageType[] = require("../assets/data/languages.json");

    const { isSource } = useLocalSearchParams();
    const isSourceBoolean = isSource == "true";

    const filteredLanguages = isSourceBoolean ? languages : languages.filter((lang) => lang.lang_code !== "auto");

    return (
        <View>
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
