import React from "react";
import { View, Text, Button, Image, StyleSheet, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";

export default function Intro({ text, source, bodysrc, pathsrc, skip, next,nextLink,skipLink }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoview}>
                <Image width={100} style={styles.logo} source={source} />
            </View>
            <View>
                <Text style={styles.header}>
                    {text}
                </Text>
            </View>
            <View style={styles.imgcontainer}>
                <Image width={100} style={styles.centerimg} source={bodysrc} />
                <Image width={100} style={styles.path} source={pathsrc} />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ECF1FA',
    
    },
    logoview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%'
    },
    logo: {



    }
    ,
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10,
        marginTop:20
    },
    imgcontainer: {
        marginTop:-100,
      height:560
    },
    centerimg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
        marginLeft: "auto",
        marginRight: 'auto'
    },
    path: {
        position: 'absolute',
        zIndex: -1
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:20
        
    },
    btn: {
        color: '#2A2AC0',
        
    }
    
})