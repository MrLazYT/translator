import { Suspense } from "react";
import { Stack } from "expo-router";
import { ActivityIndicator, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Suspense fallback={<ActivityIndicator size="large" />}>
                <StatusBar barStyle="light-content" />

                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen
                        name="selectLanguageModal"
                        options={{
                            title: "Select Language",
                            headerStyle: {
                                backgroundColor: "#4B4B4B",
                            },
                            headerTintColor: "#E4E4E4",
                            presentation: "modal",
                        }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
            </Suspense>
        </Provider>
    );
}
