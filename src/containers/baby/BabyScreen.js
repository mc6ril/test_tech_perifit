import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Context } from "../../context/ContextProvider";
import ReusableImage from "../../components/reusable/ReusableImage";

const BabyProfil = ({ navigation }) => {
  const { dispatch, state } = useContext(Context);

  // const navigation = useNavigation();

  console.log(state.baby);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Feather name='settings' size={24} color='black' onPress={() => navigation.navigate("Updatebaby")} />,
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.page}>
      <ReusableImage source={{ uri: state.baby.uriImage }} />

      <Text style={styles.babyName}>{`${state.baby.name}, ${state.baby.age}`}</Text>
      <View style={styles.separator} />

      <View style={styles.dataBaby}>
        <View style={styles.data}>
          <Text>Age</Text>
          <Text>{state.baby.age}</Text>
        </View>
        <View style={styles.data}>
          <Text>Poids</Text>
          <Text>{state.baby.weight}</Text>
        </View>
        <View style={styles.data}>
          <Text>Taille</Text>
          <Text>{state.baby.height}</Text>
        </View>
        <View style={styles.data}>
          <Text>Tour de tête</Text>
          <Text>{state.baby.head}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BabyProfil;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 50,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  babyName: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 45,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  dataBaby: {
    display: "flex",
    flex: 1,
  },
  data: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
