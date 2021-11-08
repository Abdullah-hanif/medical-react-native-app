import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import Buttonn from "../Components/Button";
import TextInputt from "../Components/Input";
import SigninBoiler from "../Components/SigninBoiler";
import {CommonActions } from "@react-navigation/routers";

export default function SigninNumber() {
    return (
        <ScrollView style={styles.container}>
            <SigninBoiler
                display='none'
                header='Mobile Number'
                text='The code will be sent to the full mobile number'
            />
            <TextInputt placeholder='Enter Number'/>
            <Buttonn
                title='Continue'
                or='or'
                // onPress={() =>
                //     navigation.dispatch(
                //         CommonActions.navigate({
                //             name: 'Verification',
                //         })
                //     )
                // }

            />
         
           
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF1FA',


    }
})