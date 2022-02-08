import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

const ReusableImage = ({ source, onPressFunction }) => {
  return (
    <Pressable style={styles.containerImage} onPress={onPressFunction}>
      <Image style={styles.image} source={source} />
    </Pressable>
  );
};

export default ReusableImage;

const styles = StyleSheet.create({
  containerImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 150,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
});
