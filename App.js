import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Google from "./components/Google";
import Youtube from "./components/Youtube";
import Amazon from "./components/Amazon";
import Pkm from "./components/Pkm";
import Github from "./components/Github";
import Facebook from "./components/Facebook";
import Instagram from "./components/Instagram";
import PdfDrive from "./components/PdfDrive";
import Flipkart from "./components/Flipkart";
import Icon from "./components/Icon";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "PKM",headerTitleAlign:"center" }} />
        <Stack.Screen name="Google" component={Google} />
        <Stack.Screen name="Youtube" component={Youtube} />
        <Stack.Screen name="Github" component={Github} />
        <Stack.Screen name="Facebook" component={Facebook} />
        <Stack.Screen name="Instagram" component={Instagram} />
        <Stack.Screen name="PdfDrive" component={PdfDrive} />
        <Stack.Screen name="Amazon" component={Amazon} />
        <Stack.Screen name="Flipkart" component={Flipkart} />
        <Stack.Screen name="Pkm" component={Pkm} options={{ title: "PKM Boys" }} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}
