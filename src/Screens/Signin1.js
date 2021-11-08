import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import Buttonn from "../Components/Button";
import SigninBoiler from "../Components/SigninBoiler";
import {CommonActions } from "@react-navigation/routers";

export default function Signin1({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <SigninBoiler
                display='none'
                header='Welcome'
                text='Signin to continue'

            />
            <Buttonn
                title='Signin with Mobile number'
                or='or'
                onPress={() =>
                    navigation.dispatch(
                        CommonActions.navigate({
                            name: 'SigninNumber',
                        })
                    )
                }

            />
            <Text style={styles.or}>or</Text>
            <Buttonn
            title='Signin with Facebook'
                // onPress={() =>
                //     navigation.dispatch(
                //         CommonActions.navigate({
                //             name: 'SignFacebook',
                //         })
                //     )
                // }
                secondTitle='Signin with facebook' />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF1FA',
        width:'100%'

    },or:{
        textAlign:'center',
        paddingVertical:6
    }
})