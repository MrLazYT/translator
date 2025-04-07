import axios from "axios";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
    const [sourceLang, setSourceLang] = useState<string>("auto");
    const [targetLang, setTargetLang] = useState<string>("uk");
    const [sourceText, setSourceText] = useState<string>("");
    const [translatedText, setTranslatedText] = useState<string>("Translated text...");

    const translate = async (text: string, source: string = "auto", target: string = "uk") => {
        const api = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(
            text
        )}`;

        try {
            const response = await axios.get(api);
            const translatedArray = response.data[0];
            let result = "";

            for (let i = 0; i < translatedArray.length; i++) {
                result += translatedArray[i][0];
            }

            return result;
        } catch (error) {
            console.log("[Translate Error] Something went wrong!");
            return "";
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Enter the text you want to translate"
                placeholderTextColor="#E4E4E4"
                multiline
                value={sourceText}
                onChangeText={async (value) => {
                    setSourceText(value);
                    const translation = await translate(value, sourceLang, targetLang);

                    setTranslatedText(translation);
                }}
            />

            <View style={styles.languageSelectorContainer}>
                <Pressable>
                    <Text style={styles.languageSelectorSource}>English</Text>
                </Pressable>

                <Pressable style={styles.imageContainer}>
                    <Image source={require("../../assets/change-language-icon.png")} style={styles.image} />
                </Pressable>

                <Pressable>
                    <Text style={styles.languageSelectorTarget}>Ukrainian</Text>
                </Pressable>
            </View>

            <Text style={styles.textOutput}>{translatedText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000000",
    },

    textInput: {
        width: "100%",
        height: "40%",
        margin: 10,
        padding: 20,
        backgroundColor: "#1E1E1E",
        borderTopColor: "#444444",
        borderBottomColor: "#444444",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        color: "#E4E4E4",
        fontSize: 20,
        verticalAlign: "top",
    },
    textOutput: {
        width: "100%",
        height: "40%",
        margin: 10,
        padding: 20,
        backgroundColor: "#2A2A2A",
        borderTopColor: "#555555",
        borderBottomColor: "#555555",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        color: "#E4E4E4",
        fontSize: 20,
        verticalAlign: "top",
    },
    languageSelectorContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
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
    text: {
        color: "#E4E4E4",
        fontSize: 20,
    },
    imageContainer: {
        width: 44,
        height: 44,
        margin: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#4B4B4B",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
    },
    image: {
        width: 32,
        height: 32,
    },
    primaryBtn: {
        width: "95%",
        margin: 20,
        padding: 13,
        alignItems: "center",
        backgroundColor: "#4B4B4B",
        borderRadius: 1000,
    },
    btnText: {
        color: "#E4E4E4",
        fontSize: 22,
        fontWeight: 700,
    },
});
