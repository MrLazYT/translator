import React, { useState } from "react";
import * as Clipboard from "expo-clipboard";
import CopyButton from "../buttons/CopyButton";
import RemoveButton from "../buttons/RemoveButton";
import HistoryService from "../../services/db/HistoryService";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TranslationCardProps } from "../../types/componentTypes";

export function areEqual(prev: TranslationCardProps, next: TranslationCardProps) {
    return prev.id === next.id && prev.sourceText === next.sourceText && prev.targetText === next.targetText;
}

export default React.memo(function TranslationCard({ id, sourceText, targetText, onRemove }: TranslationCardProps) {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const onPressHandle = () => {
        setIsPressed(!isPressed);
    };

    const onCopyHandle = async () => {
        await Clipboard.setStringAsync(targetText);
    };

    const onRemoveHandle = async () => {
        await HistoryService.delete(id);

        onRemove(id);
    };

    return (
        <Pressable style={isPressed ? styles.pressedContainer : styles.container} onPress={onPressHandle}>
            <View testID="btn-container" style={isPressed ? styles.btnContainer : styles.hidden}>
                <CopyButton testID="copy-btn" onPress={onCopyHandle} />
                <RemoveButton testID="remove-btn" onPress={onRemoveHandle} />
            </View>

            <Text style={styles.sourceText}>{sourceText}</Text>
            <Text style={isPressed ? styles.targetText : styles.hidden}>{targetText}</Text>
        </Pressable>
    );
}, areEqual);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 69,
        padding: 20,
        backgroundColor: "#1E1E1E",
        borderTopColor: "#444444",
        borderBottomColor: "#444444",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        fontSize: 20,
        verticalAlign: "top",
    },
    pressedContainer: {
        width: "100%",
        padding: 20,
        backgroundColor: "#2A2A2A",
        borderTopColor: "#444444",
        borderBottomColor: "#444444",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        fontSize: 20,
        verticalAlign: "top",
    },
    sourceText: {
        color: "#E4E4E4",
        fontSize: 20,
    },
    targetText: {
        color: "#707070",
        fontSize: 20,
        paddingTop: 5,
    },
    btnContainer: {
        position: "absolute",
        margin: 20,
        right: 0,
        flexDirection: "row",
        zIndex: 999,
    },
    hidden: {
        display: "none",
    },
});
