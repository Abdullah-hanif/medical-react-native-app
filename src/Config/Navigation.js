import React from "react";
import {Welcome,Intro2,Intro3,Signin1,SigninNumber} from '../Screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" options={{ title: 'Welcome' }}  component={Welcome} />
          <Stack.Screen name="Intro2" options={{ title: 'Welcome' }} component={Intro2} />
          <Stack.Screen name="Intro3" options={{ title: 'Welcome' }} component={Intro3} />
          <Stack.Screen name="Signin1" options={{ title: 'Signin' }} component={Signin1} />
          <Stack.Screen name="SigninNumber" options={{ title: 'Send Code' }} component={SigninNumber} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  