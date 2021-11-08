import React from "react";
import Intro from "../Components/Intro";
import {View } from "react-native";
import Buttonn from "../Components/Button";
import {CommonActions } from "@react-navigation/routers";

export default function Intro3({ navigation }) {
  return (
    <View >
      <Intro text='Discuss in the Forum'
        source={require('../../assets/Logo.png')}
        bodysrc={require('../../assets/third.png')}
        pathsrc={require('../../assets/path.png')}
      
      />
           <View style={{position:'absolute',zIndex:2,bottom:30,flexDirection:'row',justifyContent:'space-between',width:'58%',paddingHorizontal:30}}>
        <Buttonn
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
          title="Next"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: 'Signin1',

              })
            )
          }
        /></View>
    </View>


  )
}