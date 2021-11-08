import React from "react";
import { ScrollView,Text,View,Image ,StyleSheet} from "react-native";
export default function SigninBoiler ({header,text}){
    return(
        <ScrollView style={styles.container}>
             <View style={styles.logoview}>
                <Image width={100}   source={require('../../assets/Logo.png')} />
            </View>
            
                <View style={styles.textCont}>
                    <Text style={styles.headerr}>{header}</Text>
                  
                    <Text style={styles.textt} >{text}</Text>
                </View>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ECF1FA',
        paddingBottom:50
    
    },
    logoview: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '45%'
    },
    textCont:{
        justifyContent: 'center',
        alignItems: 'center', 
    },
    headerr:{
        paddingVertical:12,
        fontSize:30,
        fontWeight:'600'
    },
    textt:{
        paddingBottom:8
    }
  
})       