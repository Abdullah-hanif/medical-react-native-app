import React from "react";
import Navigation from "../Config/Navigation";
import { Pressable, Text, StyleSheet } from "react-native";
export default function buttonn({ title, onPress }) {
    return (<Pressable title={title} onPress={onPress} style={styles.btn}><Text style={styles.text}>{title}</Text></Pressable>)
}
const styles = StyleSheet.create({
    btn: {
        height: 43,
        width:'95%',
        backgroundColor: '#2A2AC0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:10

    },
    text:{
        color:'#fff'
    }
})