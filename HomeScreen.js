import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import StaffCard from "/Users/benpoarch/SalonApp/StaffCard.js";
import styles from "/Users/benpoarch/SalonApp/Styles.js";
import BookingScreen from "/Users/benpoarch/SalonApp/BookingScreen.js";
import CarouselCard from "./CarouselCard";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

function HomeScreen(state) {
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

  shouldOpenWebview = false;
  state = { shouldOpenWebview: false };

  shouldOpenWebview = false;
  if (state.shouldOpenWebview) return <BookingScreen />;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={{ flex: 0.9 }}>
        <Image
          style={styles.logo}
          source={require("/Users/benpoarch/SalonApp/assets/logo.png")}
        ></Image>
      </View>

      <View style={{ flex: 2 }}>
        <Text
          style={{
            fontFamily: "Oxygen-Regular",
            fontSize: 20,
            marginLeft: 20,
            marginBottom: 5,
          }}
        >
          Meet the team
        </Text>
        <ScrollView
          style={{ flex: 2 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/lillie.jpg")}
            name="Lillie"
            role="Salon Owner"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/lesley.jpeg")}
            name="Lesley"
            role="Salon Owner"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/chantelle.jpeg")}
            name="Chantelle"
            role="Beauty Therapist"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/tia.jpeg")}
            name="Tia"
            role="Beauty Therapist"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/rosa.jpg")}
            name="Rosa"
            role="Nail Technician"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/nickiesha.jpg")}
            name="Nickiesha"
            role="Massage Therapist"
          />

          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/simi.jpg")}
            name="Simi"
            role="Beauty Therapist"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/jasmine.jpg")}
            name="Jasmine"
            role="Beauty Therapist"
          />
          <StaffCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/staff/becky.jpeg")}
            name="Becky"
            role="Beauty Therapist"
          />
        </ScrollView>
      </View>

      <View style={{ flex: 2 }}>
        <Text
          style={{
            fontFamily: "Oxygen-Regular",
            fontSize: 20,
            marginLeft: 20,
            marginBottom: 5,
          }}
        >
          Gallery
        </Text>
        <ScrollView
          style={{ flex: 2 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CarouselCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/gallery/salon.jpeg")}
          />
          <CarouselCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/gallery/salon2.jpeg")}
          />
          <CarouselCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/gallery/salon3.jpeg")}
          />
          <CarouselCard
            imageUri={require("/Users/benpoarch/SalonApp/assets/gallery/salon4.jpeg")}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;
