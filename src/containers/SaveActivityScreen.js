import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { transformTimer } from "../utils/utils";
import { Context } from "../context/ContextProvider";
import moment from "moment";
import "moment/locale/fr";

const SaveActivityScreen = (props) => {
  moment.locale("fr");

  const { dispatch, state } = useContext(Context);

  const [leftTime, setLeftTime] = useState("");
  const [rightTime, setRightTime] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    const leftTime = transformTimer(state.lastEvent.leftBosomTimer);
    const rightTime = transformTimer(state.lastEvent.rightBosomTimer);
    setLeftTime(leftTime);
    setRightTime(rightTime);

    let beginDate = new Date();
    let endDate;
    if (leftTime > rightTime) {
      endDate = beginDate + leftTime;
    } else {
      endDate = beginDate + rightTime;
    }

    beginDate = moment().format("LL");
    endDate = moment().format("LL");
    setDate({
      start: beginDate,
      end: endDate,
    });

    const newEvent = [...state.events];
    newEvent.push({
      startDate: beginDate,
      endDate: endDate,
      leftBosomTimer: leftTime,
      rightBosomTimer: rightTime,
    });

    console.log("newEvent ==>", newEvent);

    dispatch({
      type: "event",
      events: newEvent,
    });
  }, []);

  return (
    <ScrollView style={styles.page}>
      <View>
        <View style={[styles.rowStyle]}>
          <Text style={styles.text}>Sein gauche</Text>
          <Text style={styles.text}>{leftTime ? leftTime : "0:00"}</Text>
        </View>
        <View style={[styles.rowStyle]}>
          <Text style={styles.text}>Sein droit</Text>
          <Text style={styles.text}>{rightTime ? rightTime : "0:00"}</Text>
        </View>
        <View style={[styles.rowStyle]}>
          <Text style={styles.text}>Commencer</Text>
          <Text style={styles.text}>{date.start}</Text>
        </View>
        <View style={[styles.rowStyle]}>
          <Text style={styles.text}>Fin</Text>
          <Text style={styles.text}>{date.end}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SaveActivityScreen;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    paddingVertical: 50,
    backgroundColor: "#C79979",
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
});
