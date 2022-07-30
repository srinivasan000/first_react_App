import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View,TouchableOpacity } from 'react-native';
import Icon from "./Icon";

export default function Home({navigation}) {
    return (
      
      <ScrollView showVerticalScrollIndicator={true} vertical={true} >
        <View style={{backgroundColor:'#fff',display:'flex',flexDirection:'row',flexWrap:'wrap',width:'100%',height:'100%'}}>
          <TouchableOpacity onPress={() =>
          navigation.navigate('Pkm')} >
             <Icon name="pkm" app={require("../assets/img.png")} />
        </TouchableOpacity>
                
        <TouchableOpacity onPress={() =>
          navigation.navigate('Google')}>
            <Icon name="google" app={require("../assets/google.png")} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() =>
          navigation.navigate('Youtube')}>
            <Icon name="google" app={require("../assets/youtube.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
          navigation.navigate('Github')}>
            <Icon name="Github" app={require("../assets/git.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
          navigation.navigate('Facebook')}>
            <Icon name="Facebook" app={require("../assets/fb.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
          navigation.navigate('Instagram')}>
            <Icon name="Instagram" app={require("../assets/insta.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
          navigation.navigate('PdfDrive')}>
            <Icon name="PdfDrive" app={require("../assets/pdf.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
          navigation.navigate('Amazon')}>
            <Icon name="Amazon" app={require("../assets/ama.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
          navigation.navigate('Flipkart')}>
            <Icon name="Flipkart" app={require("../assets/flip.png")} />
                </TouchableOpacity>

</View>        
    </ScrollView>

    );
  }
  
