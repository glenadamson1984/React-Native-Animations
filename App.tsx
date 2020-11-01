import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const value = useState(new Animated.ValueXY({ x: 0, y: 0 }))[0];
  const value2 = useState(new Animated.Value(0))[0];

  const moveBall = () => {
    Animated.timing(value, {
      toValue: { x: 100, y: 100 },
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

const moveBlueBall = () => {
  Animated.timing(value2, {
    toValue: 100,
    duration: 1000,
    useNativeDriver: false
  }).start();

  // if you want more of a bounce effect use spring with no duration
  // Animated.spring(value2, {
  //   toValue: 100,
  //   useNativeDriver: false
  // }).start();
}

  return (
    <View>
      {/* animated using x and y */}
      <View>
        <Animated.View style={value.getLayout()}>
        <TouchableOpacity onPress={moveBall}>
          <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "red"
          }} >
          </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
          {/* animated using only value */}
      <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
        <Animated.View style={{marginLeft: value2}}>
        <TouchableOpacity onPress={moveBlueBall}>
          <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "blue"
          }} >
          </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
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
