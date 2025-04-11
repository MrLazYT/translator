import { StyleSheet, TextInput } from "react-native";
import { SourceTextInputProps } from "../../types/componentTypes";

export default function SourceTextInput({ sourceText, onChangeText }: SourceTextInputProps) {
    return (
        <TextInput
            style={styles.textInput}
            placeholder="Enter the text you want to translate"
            placeholderTextColor="#E4E4E4"
            multiline
            value={sourceText}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
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
});
