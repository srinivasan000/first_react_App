import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,styleSheet} from 'react-native';
import { WebView } from "react-native-webview";

export default function Pkm() {
    return (
        <View style={{width:'100%',height:'100%'}}>
            <WebView source={{ uri: "http://pkmboys.unaux.com" }} style={{width:'100%',height:'100%'}} />
        </View>); 
    
}