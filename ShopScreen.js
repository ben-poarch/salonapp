import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native";

export default function ShopScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://www.victoriasbeautyshop.co.uk/",
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
