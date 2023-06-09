import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  logo: {
    height: 90,
    width: Dimensions.get("window").width / 4,
    left:
      Dimensions.get("window").width / 2 - Dimensions.get("window").width / 8,
    top: 10,
  },
  scrollView: {
    flex: 3,
    flexDirection: "column",
  },
  cardStyle: {
    height: 220,
    width: 200,

    marginLeft: 20,
  },

  scrollViewImage: {
    height: 150,
    width: 160,
  },
  button: {
    alignItems: "center",

    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 3,
    height: 40,
    width: Dimensions.get("window").width / 3,
    backgroundColor: "#Eaeae5",
    fontFamily: "Oxygen-Regular",
  },
  buttonText: {
    color: "black",
    fontFamily: "Verdana",
  },
  text: {
    fontFamily: "Oxygen-Regular",
    fontSize: 16,
  },
  contactScreenText: {
    fontFamily: "Oxygen-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
    top: 10,
    left: 10,
    position: "absolute",
    width: Dimensions.get("window").width,
    textAlign: "left",
  },
  contactScreenTextEmail: {
    fontFamily: "Oxygen-Light",
    fontSize: 16,
    textDecorationLine: "underline",
    MarginBottom: 20,
    textAlign: "center",
    backgroundColor: "#Eaeae5",
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  contactScreenTextPhone: {
    fontFamily: "Oxygen-Light",
    textDecorationLine: "underline",
    fontSize: 16,

    textAlign: "center",
    backgroundColor: "#Eaeae5",
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  contactScreenCard: {
    borderColor: "grey",
    borderWidth: 0.5,
    //flex: 0.3,
    width: 125,
    height: 100,
    margin: 5,
    backgroundColor: "#Eaeae5",
    borderRadius: 20,
  },
  contactScreenCardText: {
    fontFamily: "Oxygen-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  contactScreenCardIcon: {
    alignItems: "center",
    padding: 10,
  },
  homeText: {
    color: "Black",
    fontFamily: "Verdana",
    fontSize: 22,
    letterSpacing: 0,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F9F8F7",
    //logo colour = #F9F8F7
  },
  navigationBar: {
    flex: 2,
    bottom: 0,
  },
  app: {
    flex: 1,
  },
  notificationInbox: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "grey",
    backgroundColor: "#Eaeae5",
    flexDirection: "row",
    top: 5,
    bottom: 5,
  },
  roundedImage: {
    flex: 2,
    borderTopLeftRadius: 70,
    borderColor: "#F9F8F7",
    borderWidth: 100,
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width,
  },
  notificationInboxText: {
    color: "Black",
    fontFamily: "Verdana",
    left: 10,
    letterSpacing: 0,
    textAlign: "center",
  },
  notificationInboxTextTitle: {
    color: "Black",
    fontFamily: "Verdana",
    left: 10,
    letterSpacing: 0,
    textAlign: "center",
    fontWeight: "bold",
  },
  promotion: {
    color: "Black",
    fontFamily: "Verdana",

    letterSpacing: 0,
    bottom: 5,
    top: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
