import { Text, View } from "react-native";
import { MigrationErrorProps } from "../../types/componentTypes";

export default function MigrationError({ error }: MigrationErrorProps) {
    return (
        <View>
            <Text>Migration error: {error.message}</Text>
        </View>
    );
}
