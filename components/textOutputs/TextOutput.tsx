import { StyleSheet, Text } from "react-native";
import { TargetTextOutputProps } from "../../types/componentTypes";

export default function TargetTextOutput({ targetText }: TargetTextOutputProps) {
    return <Text style={styles.textOutput}>{targetText}</Text>;
}

const styles = StyleSheet.create({
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
});
