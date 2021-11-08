import React from "react";
import { View, Text } from "react-native";
import Intro from "../Components/Intro";
import Buttonn from "../Components/Button";
import { CommonActions } from "@react-navigation/routers";
 
export default function Intro2({navigation}) {
  return (
    <View>
      <Intro text='Storage your Medical Records'
        source={require('../../assets/Logo.png')}
        bodysrc={require('../../assets/second.png')}
        pathsrc={require('../../assets/path.png')}
      
      />
      <View style={{position:'relative',zIndex:2,bottom:30,flexDirection:'row',justifyContent:'space-between',width:'58%',paddingHorizontal:30}}>
        <Buttonn style={{flex:0.4}}
          title="Skip"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Signin1',

              })
            )
          }
        />
        <Buttonn
        style={{flex:0.4}}
          title="Next"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Intro3',

              })
            )
          }
        /></View>
    </View>

  )
}