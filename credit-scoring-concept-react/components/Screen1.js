import React from 'react';
import { Text, View, StyleSheet, SafeAreaView ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
import { AdMobBanner } from 'expo-ads-admob';


interface CircularProgressProps {
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.circularContainer}>
      <Svg height="200" width="200">
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth={10}
        />
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="transparent"
          stroke="#007bff"
          strokeWidth={10}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
        <Text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fontSize={20} fill="#007bff">
          2300
        </Text>
      </Svg>
    </View>
  );
};

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['lightblue', 'white']}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 25, paddingBottom: 20 }}>
          Predicted Credit Score
        </Text>
        <SafeAreaView style={styles.containerBACK}>
          <CircularProgress progress={75} />
        </SafeAreaView>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.adTitle}>Special Offer</Text>
      <Text style={styles.adDescription}>
        Get 50% off on your first purchase! Limited time offer.{' '}
        <Text style={styles.linkText}>Learn more</Text>
      </Text>
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>Shop Now</Text>
      </View>

      <Text style={styles.adTitle}>Special Offer</Text>
      <Text style={styles.adDescription}>
        Get 50% off on your first purchase! Limited time offer.{' '}
        <Text style={styles.linkText}>Learn more</Text>
      </Text>
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>Shop Now</Text>
      </View>

      <Text style={styles.adTitle}>Special Offer</Text>
      <Text style={styles.adDescription}>
        Get 50% off on your first purchase! Limited time offer.{' '}
        <Text style={styles.linkText}>Learn more</Text>
      </Text>
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>Shop Now</Text>
      </View>

      <Text style={styles.adTitle}>Special Offer</Text>
      <Text style={styles.adDescription}>
        Get 50% off on your first purchase! Limited time offer.{' '}
        <Text style={styles.linkText}>Learn more</Text>
      </Text>
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>Shop Now</Text>
      </View>

        </ScrollView>
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
  containerBACK: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    flex: 1,
    position:'absolute',
    marginTop:40,
    marginLeft:50,
    
  },
  circularContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    overflow: 'hidden',
  },
  adContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 16,
  },
  adTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  adDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 12,
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  ctaContainer: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginTop: '80%', // Adjust the marginTop to start from half of the screen going down
  },
});

export default Screen1;
