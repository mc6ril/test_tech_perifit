import React, { createContext, useReducer } from "react";
import data from "../../assets/data/baby.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Context = createContext();

const storeData = async (value, type) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(type, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

const ContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "baby": {
        storeData(action.baby, action.type);
        return {
          ...state,
          baby: action.baby,
        };
      }
      case "event": {
        storeData(action.events, action.type);
        return {
          ...state,
          events: action.events,
        };
      }
      case "lastEvent": {
        storeData(action.lastEvent, action.type);
        return {
          ...state,
          lastEvent: action.lastEvent,
        };
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    baby: data,
    events: [],
    lastEvent: [],
  });
  return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>;
};

export default ContextProvider;
