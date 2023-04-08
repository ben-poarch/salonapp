import React, { Component, useState } from "react";
import NavigationBar from "./NavigationBar";
import registerNNPushToken from "native-notify";

export default function App() {
  registerNNPushToken(5948, "tjN7MSQfLp2YLy7mWhsXdh");
  return <NavigationBar />;
}
