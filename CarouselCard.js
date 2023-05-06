import { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Styles from "./Styles";

function CarouselCard(props) {
  return (
    <View style={Styles.cardStyle}>
      <View style={{ flex: 2 }}>
        <Image
          source={props.imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "cover",
            borderWidth: 0.5,
            borderColor: "black",
            borderRadius: 20,
            top: 5,
          }}
        />
      </View>
      <View
        style={{
          flerx: 1,
          paddingLeft: 10,
          paddingTop: 10,
        }}
      >
        <Text>{props.name}</Text>
        <Text>{props.role}</Text>
      </View>
    </View>
  );
}

export default CarouselCard;
