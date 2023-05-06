import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import React from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { getNotificationInbox } from "native-notify";
import Styles from "./Styles";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

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

  //const [refreshing, setRefreshing] = useState([]);

  const onRefresh = useCallback(() => {
    //setRefreshing(true);
    getNotifications();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <FlatList
        data={data}
        //refreshing={true}
        //onRefresh={() => onRefresh()}
        keyExtractor={(item) => item.notification_id}
        renderItem={({ item }) => {
          return (
            <SafeAreaView>
              <View style={Styles.notificationInbox}>
                <FontAwesomeIcon
                  icon={faGift}
                  style={{
                    flex: 1,
                    marginTop: 30,
                    marginLeft: 5,
                    color: "grey",
                  }}
                />

                <View style={{ flex: 2 }}>
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

                <FontAwesomeIcon
                  icon={faGift}
                  style={{
                    flex: 1,
                    marginTop: 30,
                    marginRight: 5,
                    color: "grey",
                  }}
                />
              </View>
            </SafeAreaView>
          );
        }}
      />
    </SafeAreaView>
  );
}
