import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "/Users/benpoarch/SalonApp/HomeScreen.js";
import PromotionsScreen from "/Users/benpoarch/SalonApp/PromotionsScreen.js";
import ContactScreen from "/Users/benpoarch/SalonApp/ContactScreen.js";
import Styles from "./Styles";
import BookingScreen from "./BookingScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import ShopScreen from "./ShopScreen";

const homeName = "Home";
const bookName = "Book now";
const promotionsName = "Promotions";
const contactName = "Contact us";
const shopName = "Shop";

const Tab = createBottomTabNavigator();
const resetBookingScreen = false;

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

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer independent={true} r>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            //labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 },
            tabBarShowLabel: true,
            tabBarActiveTintColor: "black",
            tabBarStyle: { backgroundColor: "#Eaeae5" },
          })}
        >
          <Tab.Screen
            name={homeName}
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                iconName = focused ? "home" : "home-outline";
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

                iconName = focused ? "calendar" : "calendar-outline";
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
                iconName = focused ? "pricetag" : "pricetag-outline";
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
                iconName = focused ? "pin" : "pin-outline";
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
