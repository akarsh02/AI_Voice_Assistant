import {StatusBar,StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions,Text, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import OnBording1 from '@/assets/svgs/onbording1'
import { onBordingData } from '@/configs/constants'
import {scale, verticalScale} from "react-native-size-matters"
import { useFonts } from 'expo-font'
import AntDesign from '@expo/vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'


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

  const handleSkip =async () =>{
      const nextIndex = activeIndex + 1;
      if(nextIndex < onBordingData.length){
        ScrollViewRef.current?.scrollTo({
          x: Dimensions.get("window").width * nextIndex,
          animated:true,
        });
        setActiveIndex(nextIndex)
      }
        else{
         await AsyncStorage.setItem("onbording",'true')
          router.push('/home')
        }
  }

 


  return (
    <LinearGradient
    colors={["#250152","#000000"]}
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    style={styles.container}
    
    >
      <StatusBar barStyle="light-content"/>
      <Pressable onPress={handleSkip} style={styles.skipContainer}>
         <Text style={styles.skipText}>skip</Text>
         <AntDesign name="arrowright" size={scale(18)} color="white"/>
      </Pressable>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll} ref={ScrollViewRef} keyboardShouldPersistTaps="handled">
        {onBordingData.map((items:onBordingDataType,index:number)=>(
         <View style={styles.slide} key={index}>
              {items.image}
              <Text style={styles.title}>{items.title}</Text>
              <Text style={styles.subtitle}>{items.subtitle}</Text>

         </View>
        ))}
        </ScrollView>
        <View style={styles.paginationContainer}>
          {
            onBordingData.map((_,index)=>(
              <View key={index} style={[styles.dot,{opacity:activeIndex ===index ?1 :0.3 }]}/>
            ))
          }
          
          
            <View 
            
            />
        </View>
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
    textAlign:"center",
    fontFamily:"SegoeUI",
    fontSize:scale(24),
    fontWeight:"500"
  },
  subtitle:{
    color:"#9A9999",
    textAlign:"center",
    fontFamily:"SegoeUI",
    fontSize:scale(14),
    fontWeight:"400",
    width:scale(290),
    marginHorizontal:"auto",
    paddingTop:verticalScale(10)
  },
  paginationContainer:{
    position:"absolute",
    bottom:verticalScale(50),
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:scale(8)
  },
  dot:{
    width:scale(8),
    height:scale(8),
    borderRadius:100,
    backgroundColor:"#fff",
    marginHorizontal:scale(2)

  },
  skipContainer:{
    position:"absolute",
    top:verticalScale(45),
    right:scale(30),
    flexDirection:"row",
    alignItems:"center",
    gap:scale(8),
    zIndex:9999
  },
  skipText:{
    color:"#fff",
    fontSize:scale(14),
    fontFamily:"SegoeUI",
    fontWeight:"400"
  }
})

export default onBoardingScreen;