import { View, Image, Text, StyleSheet } from "react-native";
import Styles from "./Styles";

//TODO: add animated carousel - https://github.com/dohooo/react-native-reanimated-carousel
import { FadeInRight } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

function StaffCard(props) {
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
          paddingLeft: 10,
          paddingTop: 10,
        }}
      >
        <Text style={{ fontFamily: "Oxygen-Regular", fontSize: 18 }}>
          {props.name}
        </Text>
        <Text style={{ fontFamily: "Oxygen-Light", fontSize: 14 }}>
          {props.role}
        </Text>
      </View>
    </View>
  );
}

export default StaffCard;
