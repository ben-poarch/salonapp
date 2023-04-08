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
import { WebView } from "react-native-webview";
import StaffCard from "/Users/benpoarch/SalonApp/StaffCard.js";
import styles from "/Users/benpoarch/SalonApp/Styles.js";
import BookingScreen from "/Users/benpoarch/SalonApp/BookingScreen.js";
import CarouselCard from "./CarouselCard";

class HomeScreen extends Component {
  shouldOpenWebview = false;
  state = { shouldOpenWebview: false };

  render() {
    shouldOpenWebview = false;
    if (this.state.shouldOpenWebview) return <BookingScreen />;

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.logo}
            source={require("/Users/benpoarch/SalonApp/assets/icon.png")}
          ></Image>
        </View>

        <View style={{ flex: 2 }}>
          <ScrollView
            style={{ flex: 2 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/lillie.jpeg")}
              name="LILLIE"
              role="Salon Owner"
            />
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/lesley.jpeg")}
              name="LESLEY"
              role="Salon Owner"
            />
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/chantelle.jpeg")}
              name="CHANTELLE"
              role="Beauty Therapist"
            />
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/tia.jpeg")}
              name="TIA"
              role="Beauty Therapist"
            />
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/simi.jpeg")}
              name="SIMI"
              role="Beauty Therapist"
            />
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/jasmine.jpeg")}
              name="JASMINE"
              role="Beauty Therapist"
            />
            <StaffCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/becky.jpeg")}
              name="BECKY"
              role="Beauty Therapist"
            />
          </ScrollView>
        </View>

        <View style={{ flex: 2 }}>
          <ScrollView
            style={{ flex: 2 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <CarouselCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/salon.jpeg")}
            />
            <CarouselCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/salon2.jpeg")}
            />
            <CarouselCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/salon3.jpeg")}
            />
            <CarouselCard
              imageUri={require("/Users/benpoarch/SalonApp/assets/salon4.jpeg")}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

/*
<View style={{ flex: 1, alignItems: "center" }}>
          <Pressable
            style={styles.button}
            /*onPress={() => this.setState({ shouldOpenWebview: true })}
            onPress={() => this.setState({ shouldOpenWebview: true })}
          >
            <Text style={styles.buttonText}>Book now</Text>
          </Pressable>
        </View>
        <View style={{ flex: 2 }}>
          <Image
            style={styles.roundedImage}
            source={require("./assets/salon.jpeg")}
          ></Image>
        </View>
*/

export default HomeScreen;
