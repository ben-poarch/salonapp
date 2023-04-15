import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { getNotificationInbox } from "native-notify";
import Styles from "./Styles";

export default function PromotionsScreen() {
  const [data, setData] = useState([]);
  async function getNotifications() {
    let notifications = await getNotificationInbox(
      5948,
      "tjN7MSQfLp2YLy7mWhsXdh"
    );

    //console.log("notifications: ", notifications);
    setData(notifications);
  }
  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.notification_id}
        renderItem={({ item }) => {
          return (
            <SafeAreaView>
              <View style={Styles.notificationInbox}>
                <Text> </Text>
                <Text
                  style={{
                    fontFamily: "Oxygen-Regular",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: "Oxygen-Light",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  {item.message}
                </Text>
                <Text> </Text>
              </View>
              <View>
                <Text></Text>
              </View>
            </SafeAreaView>
          );
        }}
      />
    </SafeAreaView>
  );
}
