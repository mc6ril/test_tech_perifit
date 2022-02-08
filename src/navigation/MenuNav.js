import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";

let ScreenHeight = Dimensions.get("window").height;

const MenuNav = (props) => {
  const navigation = useNavigation();

  const menu = [
    {
      title: "Accueil",
      link: () => navigation.navigate("Home"),
    },
    {
      title: "Profil de bébé",
      link: () => navigation.navigate("Baby"),
    },
    {
      title: "Abonnement",
      link: () => navigation.navigate("Baby"),
    },
    {
      title: "Partage familial",
      link: () => navigation.navigate("Baby"),
    },
    {
      title: "Rappels",
      link: () => navigation.navigate("Baby"),
    },
    {
      title: "Histoire des évènements",
      link: () => navigation.navigate("Events"),
    },
    {
      title: "Réglages",
      link: () => navigation.navigate("Baby"),
    },
  ];

  return (
    <View style={styles.MenuNav}>
      <View style={styles.headerNav}>
        <Text>Plan actuel</Text>
        <Text style={{ fontSize: 32 }}>Base</Text>
        <Text style={styles.text}>Evènements restants</Text>
      </View>
      <View style={{ height: "60%", padding: 10, display: "flex", gap: 10 }}>
        {menu.map((link, index) => {
          return (
            <Text style={styles.text} key={index} onPress={link.link}>
              {link.title}
            </Text>
          );
        })}
      </View>
      <Text style={{ paddingHorizontal: 10, marginTop: "auto" }}>Support</Text>
    </View>
  );
};

export default MenuNav;

const styles = StyleSheet.create({
  MenuNav: {
    height: ScreenHeight,
    zIndex: 1,
    backgroundColor: "white",
    paddingVertical: 50,
  },
  headerNav: {
    backgroundColor: "#F7EFF7",
    padding: 10,
  },
  text: {
    marginVertical: 10,
  },
});
