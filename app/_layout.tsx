import { Suspense } from "react";
import { Stack } from "expo-router";
import { ActivityIndicator, StatusBar } from "react-native";

// export const DATABASE_NAME = "tasks_db";

export default function RootLayout() {
    return (
        <Suspense fallback={<ActivityIndicator size="large" />}>
            <StatusBar barStyle="light-content" />

            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
        </Suspense>
    );
}
