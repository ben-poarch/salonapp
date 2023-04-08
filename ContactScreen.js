import { Component, useState, useEffect, React } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Styles from "./Styles";
import WebView from "react-native-webview";
import MapView from "react-native-maps";

//https://goo.gl/maps/gEGQRQJVqPC9z7aL8

class ContactScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", top: 30 }}>
          <Text style={Styles.text}>bookings.victorias@gmail.com</Text>
          <Text style={Styles.text}>0117 957 5080</Text>
          <Text style={Styles.text}> </Text>
          <Text style={Styles.text}>2 Cleevewood</Text>
          <Text style={Styles.text}>Downend</Text>
          <Text style={Styles.text}>BS16 2SF</Text>
        </View>

        <View style={{ flex: 2, borderTopWidth: 1 }}>
          <MapView
            style={Styles.map}
            initialRegion={{
              latitude: 51.49299987017053,
              longitude: -2.5102678316616824,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ContactScreen;
