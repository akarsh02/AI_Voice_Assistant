import { Image, StyleSheet, Platform } from 'react-native';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isOnboarding,setOnboarding] = useState(true)
  useEffect(()=>{
    const checkOnbording = async () =>{
      const isOnboarding = await AsyncStorage.getItem("onbording")
      if(isOnboarding){
        setOnboarding(false)
      }
    }
    checkOnbording()
  },[])
  return (
   <Redirect href={isOnboarding ? '/onbording':"/home"}/>
  );
}
 