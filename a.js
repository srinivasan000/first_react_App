import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,styleSheet} from 'react-native';
import { WebView } from "react-native-webview";

export default function Google() {
    return (
        <View style={{width:'100%',height:'100%'}}>
            <WebView source={{ uri: "https://google.com" }} style={{width:'100%',height:'100%'}} />
        </View>); 
    
}