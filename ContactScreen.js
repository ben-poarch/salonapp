import { Component, useState, useEffect, React } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import Styles from "./Styles";
import MapView, { Marker } from "react-native-maps";
import { SocialIcon } from "@rneui/themed";
import openMap from "react-native-open-maps";
import Icon from "react-native-vector-icons/Ionicons";

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

function appLocation() {
  openMap(
    Platform.OS === "ios"
      ? {
          latitude: 51.492904,
          longitude: -2.510293,
          zoom: 20,
          query: "L&L Beauty Retreat",
        }
      : {
          latitude: 51.49299987017053,
          longitude: -2.5102678316616824,
          zoom: 20,
          query: "L&L Beauty Retreat",
        }
  );
}

function ContactScreen() {
  var location = Platform.OS === "ios" ? iOSLocation : googleLocation;
  var mapsApp = Platform.OS === "ios" ? "Open in Maps" : "Open in Google Maps";

  return (
    <SafeAreaView style={Styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row", paddingBottom: 25 }}>
          <SocialIcon
            type="instagram"
            iconSize={28}
            button="true"
            onPress={() => {
              Linking.openURL(
                "https://instagram.com/victoriashandb?igshid=YmMyMTA2M2Y="
              );
            }}
          />
          <SocialIcon
            type="facebook"
            iconSize={28}
            button="true"
            onPress={() => {
              Linking.openURL("https://www.facebook.com/BeautySalonsBristol");
            }}
          />

          {/* <Tiktok /> */}
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://www.tiktok.com/@landlbeautyretreat?_t=8bk7s1355o3&_r=1"
              );
            }}
          >
            <Image
              source={require("/Users/benpoarch/SalonApp/assets/tiktok.jpg")}
              style={{
                height: 60,
                width: 60,
                borderRadius: 200,
                margin: 8,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("mailto:bookings.victorias@gmail.com");
            }}
          >
            <View style={Styles.contactScreenCard}>
              <View style={Styles.contactScreenCardIcon}>
                <Icon name="mail-outline" size={45} color="black" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={Styles.contactScreenCardText}>Email Us</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              try {
                Linking.openURL(`tel:${"01179575080"}`);
              } catch {}
            }}
          >
            <View style={Styles.contactScreenCard}>
              <View style={Styles.contactScreenCardIcon}>
                <Icon name="call-outline" size={45} color="black" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={Styles.contactScreenCardText}>Call Us</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, borderTopWidth: 1 }}>
        <MapView style={Styles.map} initialRegion={location}>
          <TouchableOpacity
            onPress={() => {
              openMap({ appLocation });
            }}
          >
            <Marker coordinate={location} title="L&L Beauty Retreat" />
          </TouchableOpacity>
        </MapView>

        <TouchableOpacity
          onPress={() => {
            appLocation();
          }}
          style={{
            width: Dimensions.get("window").width / 4.5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              borderWidth: 0.5,
              borderRadius: 10,
              padding: 2,

              margin: 5,
              backgroundColor: "rgba(234, 234, 229, 0.6)",
            }}
          >
            <Icon
              name="map-outline"
              size={30}
              color={"black"}
              //style={{ alignSelf: "center" }}
            ></Icon>
            <Text
              style={{
                fontFamily: "Oxygen-Regular",
                fontSize: 12,
                //textAlign: "center",
              }}
            >
              {mapsApp}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ContactScreen;
