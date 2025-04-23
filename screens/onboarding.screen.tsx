import {StatusBar,StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions,Text } from 'react-native'
import React, { useRef, useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import OnBording1 from '@/assets/svgs/onbording1'
import { onBordingData } from '@/configs/constants'
import {scale} from "react-native-size-matters"
import { useFonts } from 'expo-font'


const onBoardingScreen = () => {
  const [fontLoaded,fontError] = useFonts({
    SegoeUI:require("../assets/fonts/Segoe-UI.ttf")
  })
  if(!fontLoaded && !fontError){
    return null
  }
  const [activeIndex,setActiveIndex]= useState(0)
  const ScrollViewRef = useRef<ScrollView>(null)
  const handleScroll = (event:NativeSyntheticEvent<NativeScrollEvent>) =>{
    const contentoffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentoffsetX/event.nativeEvent.layoutMeasurement.width)
    setActiveIndex(currentIndex)
  }
  return (
    <LinearGradient
    colors={["#250152","#000000"]}
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    style={styles.container}
    
    >
      <StatusBar barStyle="light-content"/>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll}>
        {onBordingData.map((items:onBordingDataType,index:number)=>(
         <View style={styles.slide} key={index}>
              {items.image}
              <Text style={styles.title}>{items.title}</Text>
              <Text style={styles.subtitle}>{items.subtitle}</Text>

         </View>
        ))}
        </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  slide:{
    width:Dimensions.get("window").width,
    justifyContent:"center",
  },
  title:{
    color:"#ffff",
    margin:"auto",
    fontFamily:"SegoeUI",
    fontSize:scale(24),
    fontWeight:"500"
  },
  subtitle:{
    color:"white",
    margin:"auto",
    width:"50%",
    marginTop:"10px"
  }
})

export default onBoardingScreen;