import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Timer = (props) => {
  return (
    <View>
      <Text>{props.isPaused ? "Commence" : "Allaitement"}</Text>
      <View style={styles.rowStyle}>
        <Text style={styles.text}> {("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}:</Text>
        <Text style={styles.text}>{("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}</Text>
      </View>
      {props.isActive ? (
        <Pressable style={styles.playButton} onPress={props.handlePauseResume}>
          <Feather name={props.isPaused ? "pause" : "play"} size={24} color='white' />
        </Pressable>
      ) : (
        <Pressable style={styles.playButton} onPress={props.handleStart}>
          <FontAwesome name='play' size={24} color='white' />
        </Pressable>
      )}
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
  },
  playButton: {
    backgroundColor: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
