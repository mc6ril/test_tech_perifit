import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "../navigation/DrawerNav";

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default Navigation;
