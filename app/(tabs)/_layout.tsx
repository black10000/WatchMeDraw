import { Tabs } from "expo-router";
import React from "react";

import tw from "@/tailwind";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tw.color("gray-50"),
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tw.color("black"),
          borderTopWidth: 1,
          borderTopColor: tw.color("gray-200"),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? "blue" : "gray"}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
