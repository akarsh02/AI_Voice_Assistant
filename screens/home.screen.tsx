import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import { scale, verticalScale } from 'react-native-size-matters'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const homeScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={["#250152","#000"]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}>
      <StatusBar style="light" />
      <Image 
        source={require('@/assets/images/blur.png')}
        style={styles.blurImage}
      />
       <Image 
        source={require('@/assets/images/pink-blur.png')}
        style={styles.pinkblur}
      />
      <View style={styles.microphone}>
       <TouchableOpacity style={{
        width:scale(110),
        height:scale(110),
        backgroundColor:"#fff",
        alignItems:"center",
        flexDirection:"row",
        borderRadius:scale(100),
        justifyContent:"center"
       }}>
           <FontAwesome name='microphone' size={scale(50)} color="#2b3356"/>
       </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:"center",
  alighItems:"center",
  backgroundColor:"#131313"
 },
 blurImage:{
  position:"absolute",
  right:scale(-15),
  top:0,
  width:scale(240),
 },
 pinkblur:{
   position:"absolute",
   left:scale(-15),
   bottom:verticalScale(100),
   width:scale(210)
  
 },
 microphone:{
  justifyContent:"center",
  margin:"auto"
 }
})

export default homeScreen