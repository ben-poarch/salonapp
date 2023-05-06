import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

// Screens
import HomeScreen from "/Users/benpoarch/SalonApp/HomeScreen.js";
import PromotionsScreen from "/Users/benpoarch/SalonApp/PromotionsScreen.js";
import ContactScreen from "/Users/benpoarch/SalonApp/ContactScreen.js";
import BookingScreen from "./BookingScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

const homeName = "Home";
const bookName = "Book now";
const promotionsName = "Promotions";
const contactName = "Contact us";

const Tab = createBottomTabNavigator();

const BookingButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

function NavigationBar() {
  const [fontsLoaded] = useFonts({
    "Oxygen-Regular": require("./assets/fonts/Oxygen-Regular.ttf"),
    "Oxygen-Bold": require("./assets/fonts/Oxygen-Bold.ttf"),
    "Oxygen-Light": require("./assets/fonts/Oxygen-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true} onLayout={onLayoutRootView} r>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          //labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
          tabBarShowLabel: true,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#0a101c",

          tabBarStyle: {
            backgroundColor: "#Eaeae5",
            borderRadius: 15,
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopColor: "black",
            borderRadius: 15,
          },
          headerTitleStyle: { fontFamily: "Oxygen-Regular", fontSize: 20 },
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? "home-sharp" : "home-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name={bookName}
          component={BookingScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;

              iconName = focused ? "calendar-sharp" : "calendar-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name={promotionsName}
          component={PromotionsScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? "pricetag-sharp" : "pricetag-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name={contactName}
          component={ContactScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              iconName = focused ? "pin-sharp" : "pin-outline";
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBar;
