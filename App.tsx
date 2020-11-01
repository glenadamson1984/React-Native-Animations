import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const value = useState(new Animated.ValueXY({ x:0, y:0}))[0];
  
  const moveBall = () => {
    Animated.timing(value, {
      toValue: { x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false
    }).start();
  }
  
  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "red"
        }} >
        </View>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}><Text>Move Ball</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
