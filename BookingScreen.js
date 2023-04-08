import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native";

export default function BookingScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://bookings.gettimely.com/victoriashealthandbeauty/bb/book",
        }}
        style={{
          resizeMode: "cover",
          flex: 1,
          automaticallyAdjustContentInsets: true,
          bounces: false,
        }}
      />
    </SafeAreaView>
  );
}
