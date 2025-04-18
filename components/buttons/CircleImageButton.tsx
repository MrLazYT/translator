import { Image, Pressable, StyleSheet } from "react-native";
import { CustomImageButtonProps } from "../../types/componentTypes";

export default function CircleImageButton({ source, onPress }: CustomImageButtonProps) {
    return (
        <Pressable testID="crl-prs" style={styles.imageContainer} onPress={onPress}>
            <Image testID="crl-img" source={source} style={styles.image} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
});
