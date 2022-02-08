import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import Timer from "../components/reusable/Timer";
import { Context } from "../context/ContextProvider";

const AllaitementScreen = () => {
  const { dispatch } = useContext(Context);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const [breastfeeding, setBreastfeeding] = useState({
    left: false,
    leftBosomTimer: 0,
    isLeftActive: false,
    isLeftPaused: false,
    right: false,
    rightBosomTimer: 0,
    isRightActive: false,
    isRightPaused: false,
  });

  // Buttons to open the bossom
  const onLeftPress = () => {
    setBreastfeeding({
      ...breastfeeding,
      left: true,
      right: false,
    });
  };

  const onRightPress = () => {
    setBreastfeeding({
      ...breastfeeding,
      right: true,
      left: false,
    });
  };

  useEffect(() => {
    setBreastfeeding({
      left: false,
      leftBosomTimer: 0,
      isLeftActive: false,
      isLeftPaused: false,
      right: false,
      rightBosomTimer: 0,
      isRightActive: false,
      isRightPaused: false,
    });
  }, []);

  useEffect(() => {
    let interval = null;

    if (breastfeeding.isLeftActive && breastfeeding.isLeftPaused === false) {
      interval = setInterval(() => {
        setBreastfeeding((time) => ({
          ...time,
          leftBosomTimer: time.leftBosomTimer + 15,
        }));
      }, 15);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [breastfeeding.isLeftActive, breastfeeding.isLeftPaused]);

  useEffect(() => {
    let interval = null;

    if (breastfeeding.isRightActive && !breastfeeding.isRightPaused) {
      interval = setInterval(() => {
        setBreastfeeding((time) => ({
          ...time,
          rightBosomTimer: time.rightBosomTimer + 15,
        }));
      }, 15);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [breastfeeding.isRightActive, breastfeeding.isRightPaused]);

  const handleStart = () => {
    if (breastfeeding.right) {
      setBreastfeeding({ ...breastfeeding, isRightActive: true, isRightPaused: false });
    } else {
      setBreastfeeding({ ...breastfeeding, isLeftActive: true, isLeftPaused: false });
    }
  };

  const handlePauseResume = () => {
    if (breastfeeding.right) {
      setBreastfeeding({ ...breastfeeding, isRightPaused: !breastfeeding.isRightPaused });
    } else if (breastfeeding.left) {
      setBreastfeeding({ ...breastfeeding, isLeftPaused: !breastfeeding.isLeftPaused });
    }
  };

  const onSaveActivity = () => {
    dispatch({
      type: "lastEvent",
      lastEvent: breastfeeding,
    });

    navigation.navigate("SaveScreen");
  };

  return (
    <LinearGradient style={styles.page} colors={["90deg, rgba(215,145,115,1) 31%, rgba(238,140,141,1) 60%", "transparent"]}>
      <View style={styles.mainContainer}>
        <View style={[styles.rowStyle, { marginBottom: 150 }]}>
          <Text style={{ fontSize: 25, marginTop: 20 }}>Ga</Text>
          <Text style={{ fontSize: 25, marginTop: 20 }}>Dr</Text>
        </View>
        <View style={styles.rowStyle}>
          <Pressable
            onPress={() => onLeftPress()}
            style={[
              styles.circle,
              {
                width: breastfeeding.left ? 300 : 100,
                height: breastfeeding.left ? 300 : 100,
                borderRadius: breastfeeding.left ? 300 : 50,
                backgroundColor: "white",
                marginLeft: breastfeeding.left ? -100 : 20,
              },
            ]}
          >
            {breastfeeding.left ? (
              <Timer
                handlePauseResume={handlePauseResume}
                handleStart={handleStart}
                timer={breastfeeding.leftBosomTimer}
                isPaused={breastfeeding.isLeftPaused}
                isActive={breastfeeding.isLeftActive}
              />
            ) : (
              <Text>Sein gauche</Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => onRightPress()}
            style={[
              styles.circle,
              {
                width: breastfeeding.right ? 300 : 100,
                height: breastfeeding.right ? 300 : 100,
                borderRadius: breastfeeding.right ? 300 : 50,
                backgroundColor: "white",
                marginRight: breastfeeding.right ? -100 : 20,
              },
            ]}
          >
            {breastfeeding.right ? (
              <Timer
                handlePauseResume={handlePauseResume}
                handleStart={handleStart}
                timer={breastfeeding.rightBosomTimer}
                isPaused={breastfeeding.isRightPaused}
                isActive={breastfeeding.isRightActive}
              />
            ) : (
              <Text>Sein droit</Text>
            )}
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <AntDesign name='close' size={32} color='white' onPress={() => navigation.goBack()} />
        {breastfeeding.isLeftActive || breastfeeding.isRightActive ? (
          <Pressable
            style={styles.circle}
            onPress={() => {
              onSaveActivity();
            }}
          >
            <FontAwesome name='flag-checkered' size={24} color='white' />
          </Pressable>
        ) : (
          <Pressable style={styles.circle}>
            <SimpleLineIcons name='pencil' size={24} color='white' />
          </Pressable>
        )}

        <Pressable style={styles.squareButton}>
          <FontAwesome name='square-o' size={20} color='white' />
          <FontAwesome name='square-o' size={20} color='white' />
          <FontAwesome name='square-o' size={20} color='white' />
          <FontAwesome name='square-o' size={20} color='white' />
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default AllaitementScreen;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    paddingVertical: 50,
    backgroundColor: "#e6a285",
  },

  mainContainer: {
    flex: 1,
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bottomContainer: {
    marginTop: "auto",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  circle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  squareButton: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 40,
    height: 40,
  },
});
