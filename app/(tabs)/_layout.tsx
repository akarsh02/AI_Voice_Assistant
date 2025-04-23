import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View,Text } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <View>
    <Text>layout</Text>
   </View>
  );
}
