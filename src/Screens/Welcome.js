import React from "react";
import { View, Text } from "react-native";
import Intro from "../Components/Intro";
import Buttonn from "../Components/Button";
import { CommonActions } from "@react-navigation/routers";
export default function Welcome({ navigation }) {
  return (
    <View style={{ width:'100%'}}>
      <Intro text='Find your Doctor'
        source={require('../../assets/Logo.png')}
        bodysrc={require('../../assets/first.png')}
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
                name: 'Intro2',

              })
            )
          }
        /></View>
    </View>
  )
}