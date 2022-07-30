import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View ,styleSheet} from 'react-native';
import { WebView } from "react-native-webview";

export default function Youtube() {
    return (
        <View style={{width:'100%',height:'100%'}}>
            <WebView source={{ uri: "https://www.youtube.com/" }} style={{width:'100%',height:'100%'}} />
        </View>); 
    
}