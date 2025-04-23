import {StatusBar,StyleSheet, View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import OnBording1 from '@/assets/svgs/onbording1'
import { onBordingData } from '@/configs/constants'


const onBoardingScreen = () => {
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
  }
})

export default onBoardingScreen;