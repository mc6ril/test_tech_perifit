import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Import components
import MenuNav from "./MenuNav";

// Import Screens
import HomeScreen from "../containers/HomeScreen";
import EventScreen from "../containers/EventScreen";
import UpdateBaby from "../containers/baby/UpdateBaby";
import BabyScreen from "../containers/baby/BabyScreen";
import SaveActivityScreen from "../containers/SaveActivityScreen";
import AllaitementScreen from "../containers/AllaitementScreen";

// Icons
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MenuNav {...props} />} defaultStatus='closed'>
      <Drawer.Screen
        options={() => ({
          title: "Accueil",
        })}
        name='Home'
        component={HomeScreen}
      />

      <Drawer.Screen
        name='Events'
        options={({ navigation }) => ({
          title: "Histoire des évènements",
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => <Feather name='settings' size={24} color='black' {...navigation} />,
          headerLeft: () => <Entypo onPress={() => navigation.goBack()} name='arrow-long-left' size={24} color='black' />,
        })}
        component={EventScreen}
      />
      <Drawer.Screen
        name='Baby'
        options={({ navigation }) => ({
          title: "Profil de bébé",
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => <Feather name='settings' size={24} color='black' {...navigation} />,
          headerLeft: () => <Entypo onPress={() => navigation.goBack()} name='arrow-long-left' size={24} color='black' />,
        })}
        component={BabyScreen}
      />
      <Drawer.Screen
        name='Updatebaby'
        options={({ navigation }) => ({
          title: false,
          headerStyle: {
            backgroundColor: "#C79979",
            shadowOffset: {
              height: 0,
            },
          },
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerLeft: () => <Entypo onPress={() => navigation.goBack()} name='arrow-long-left' size={24} color='black' />,
        })}
        component={UpdateBaby}
      />

      <Drawer.Screen
        name='SaveScreen'
        options={({ navigation }) => ({
          title: "Allaitement terminé",
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRightContainerStyle: { paddingRight: 10 },
        })}
        component={SaveActivityScreen}
      />
      <Drawer.Screen
        name='Allaitement'
        options={({ navigation }) => ({
          headerLeftContainerStyle: { paddingLeft: 10 },
          headerRightContainerStyle: { paddingRight: 10 },
          headerRight: () => <Feather name='settings' size={24} color='black' {...navigation} />,
          headerLeft: () => <Entypo onPress={() => navigation.goBack()} name='arrow-long-left' size={24} color='black' />,
        })}
        component={AllaitementScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
