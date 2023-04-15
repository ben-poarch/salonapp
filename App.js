import React, { Component, useState } from "react";
import NavigationBar from "./NavigationBar";
import registerNNPushToken from "native-notify";
import { useFonts } from "expo-font";
import { View, Text, SafeAreaView } from "react-native";

export default function App() {
  registerNNPushToken(5948, "tjN7MSQfLp2YLy7mWhsXdh");

  //if (fontsLoaded) {
  return <NavigationBar />;
}
