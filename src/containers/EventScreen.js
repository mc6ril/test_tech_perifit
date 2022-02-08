import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Context } from "../context/ContextProvider";
import { FlatList } from "react-native-gesture-handler";

const EventScreen = () => {
  const { state } = useContext(Context);

  console.log(state.events);

  return (
    <View style={styles.page}>
      <FlatList
        data={state.events}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <View style={styles.rowStyle}>
                <Text style={styles.text}>{`Sein gauche : ${item.leftBosomTimer}`}</Text>
                <Text style={styles.text}>{item.endDate}</Text>
              </View>
              <View style={styles.rowStyle}>
                <Text style={styles.text}>{`Sein droit : ${item.rightBosomTimer}`}</Text>
                <Text style={styles.text}>{item.endDate}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.index}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    paddingVertical: 50,
    backgroundColor: "#C79979",
  },
  title: {
    color: "white",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#f1f1f1",
  },
});
