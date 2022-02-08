import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../../context/ContextProvider";
import { useNavigation } from "@react-navigation/core";
import { frenchFormDate } from "../../utils/utils";
import * as ImagePicker from "expo-image-picker";

const UpdateBaby = () => {
  const navigation = useNavigation();
  const { dispatch, state } = useContext(Context);
  const [newBaby, setNewBaby] = useState({});

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    setNewBaby({
      ...newBaby,
      uriImage: pickerResult.uri,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "baby",
      baby: newBaby,
    });
    navigation.navigate("Baby");
  };

  useEffect(() => {
    setNewBaby(state.baby);
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={openImagePickerAsync} style={!newBaby.uriImage ? styles.chooseImage : styles.image}>
          {newBaby.uriImage ? <Image source={{ uri: newBaby.uriImage }} style={styles.image} /> : <Feather name='camera' size={40} color='white' />}
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>Modification du profil</Text>
        <View style={styles.inputContainer}>
          <View style={styles.rowStyle}>
            <Text style={styles.label}>Prénom</Text>
            <TextInput
              value={newBaby.name}
              placeholder='Prénom'
              onChangeText={(value) =>
                setNewBaby({
                  ...newBaby,
                  name: value,
                })
              }
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.label}>Sexe de bébé</Text>
            <TextInput
              value={newBaby.gender}
              placeholder='Sexe'
              onChangeText={(value) =>
                setNewBaby({
                  ...newBaby,
                  gender: value,
                })
              }
            />
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.label}>Date de naissance</Text>
            <TextInput
              value={newBaby.birthday}
              placeholder='Date de naissance'
              onChangeText={(value) =>
                setNewBaby({
                  ...newBaby,
                  birthday: value,
                })
              }
            />
          </View>
        </View>

        <Text style={{ textAlign: "center", marginTop: "auto" }}>N'oubliez pas de sauvegarder les modifications</Text>
        <Pressable style={styles.button}>
          <Text style={{ textAlign: "center" }} onPress={onSubmit}>
            Sauvegarder les modifications
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UpdateBaby;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: "#C79979",
  },

  mainContainer: {
    flex: 1,
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  rowStyle: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 10,
    paddingVertical: 10,
  },
  label: {
    fontWeight: "100",
    marginTop: 10,
  },
  chooseImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: 150,
    height: 150,
    borderRadius: 150,
    marginTop: "-25%",
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginTop: "-17%",
    alignSelf: "center",
  },
  button: {
    width: "80%",
    marginHorizontal: "10%",
    padding: 15,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginVertical: 20,
  },
});
