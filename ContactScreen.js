import { Component, useState, useEffect, React } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Styles from "./Styles";
import MapView, { Marker } from "react-native-maps";

//coordinates from google maps
const googleLocation = [
  {
    latitude: 51.49299987017053,
    longitude: -2.5102678316616824,
    latitudeDelta: 0.0052,
    longitudeDelta: 0.0021,
  },
];

//coordinates from apple maps
const iOSLocation = {
  latitude: 51.492904,
  longitude: -2.510293,
  latitudeDelta: 0.0052,
  longitudeDelta: 0.0021,
};

class ContactScreen extends Component {
  render() {
    //change pin location depending on OS - salon has slightly different coordinates
    var location = Platform.OS === "ios" ? iOSLocation : googleLocation;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", top: 100 }}>
          <Text style={Styles.contactScreenText}>
            bookings.victorias@gmail.com
          </Text>
          <Text style={Styles.contactScreenText}>0117 957 5080</Text>
          <Text style={Styles.contactScreenText}> </Text>
          <Text style={Styles.contactScreenText}>2 Cleevewood</Text>
          <Text style={Styles.contactScreenText}>Downend</Text>
          <Text style={Styles.contactScreenText}>BS16 2SF</Text>
        </View>

        <View style={{ flex: 1, borderTopWidth: 1 }}>
          <MapView style={Styles.map} initialRegion={location}>
            <Marker coordinate={location} />
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

export default ContactScreen;
