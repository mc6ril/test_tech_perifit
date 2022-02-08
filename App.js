import { StatusBar } from "expo-status-bar";
import React from "react";
import ContextProvider from "./src/context/ContextProvider";

import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <ContextProvider>
      <StatusBar barStyle={"dark-content"} />
      <Navigation />
    </ContextProvider>
  );
}
