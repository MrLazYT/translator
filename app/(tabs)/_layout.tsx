import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: "#E4E4E4",
                tabBarInactiveTintColor: "#555555",
                tabBarItemStyle: styles.tabBarItem,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Translate",
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 80,
        backgroundColor: "#1E1E1E",
    },
    tabBarItem: {
        paddingTop: 15,
    },
});
