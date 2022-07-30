import { StatusBar } from 'expo-status-bar';
import { Text, View , Image, TouchableOpacity} from 'react-native';

export default function Icon(props) {
    return (
        <View style={{ width: 100, height: 150, marginTop: 35, marginLeft: 15,textAlign:'center'}}>
            <Image source={props.app} style={{width:100,height:100}} />
            <Text style={{fontSize:18,textAlign:'center'}}>{props.name}</Text>
   </View>
    );
}


