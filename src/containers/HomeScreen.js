import React, { useContext, useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import ReusableImage from "../components/reusable/ReusableImage";
import "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { Context } from "../context/ContextProvider";

export default function HomeScreen({ baby }) {
  const { dispatch, state } = useContext(Context);
  const navigation = useNavigation();
  // const [baby, setBaby] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(state);

  useEffect(() => {
    if (isLoading) {
      console.log("baby==>", baby);
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <ScrollView>
      <ReusableImage source={{ uri: state.baby.uriImage }} onPressFunction={() => navigation.navigate("Baby")} />
      <Text style={styles.headerTitle}>{state.baby?.name}</Text>
      <View style={styles.boxes}>
        <Pressable style={styles.box} onPress={() => navigation.navigate("Allaitement")}>
          <Entypo name='circle' size={24} color='pink' style={styles.icon} />
          <Text style={styles.boxText}>Allaitement</Text>
          <Text style={styles.boxMinorText}>Droit, 1h retour</Text>
        </Pressable>
        <Pressable style={styles.box}>
          <Entypo name='moon' size={24} color='blue' style={styles.icon} />
          <Text style={styles.boxText}>Sommeil</Text>
          <Text style={styles.boxMinorText}>Ne pas encore dormir</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    textAlign: "center",
    fontSize: 45,
  },
  boxes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  box: {
    backgroundColor: "white",
    width: 150,
    height: 100,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  boxText: {
    textAlign: "center",
    fontSize: 22,
  },
  boxMinorText: {
    fontSize: 10,
    textAlign: "center",
  },
  icon: {
    paddingVertical: 10,
    textAlign: "center",
  },
});
