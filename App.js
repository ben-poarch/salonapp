import NavigationBar from "./NavigationBottomBar";
import registerNNPushToken from "native-notify";

export default function App() {
  registerNNPushToken(5948, "tjN7MSQfLp2YLy7mWhsXdh");

  //if (fontsLoaded) {

  return <NavigationBar />;
}
