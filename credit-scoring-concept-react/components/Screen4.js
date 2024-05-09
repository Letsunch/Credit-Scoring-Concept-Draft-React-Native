import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Screen4 = () => {
  return (
    <View style={styles.container}>
    <LinearGradient
        colors={['lightblue', 'white']} 
        style={styles.gradient}
        start={{ x: 0, y: 1 }} 
        end={{ x: 0, y: 0 }} 
      >
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default Screen4;
