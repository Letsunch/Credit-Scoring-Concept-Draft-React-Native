import React, { useState } from 'react';
import {View, Text,TextInput,CheckBox,Picker,Button, StyleSheet, ScrollView,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Screen3B from './Screen3(b)';

const Screen3 = ({navigation}) => {

  const [assetTypes, setAssetTypes] = useState({
    stock: false,
    realEstate: false,
    bonds: false,
    others: false,
  });

  const [taxBracket, setTaxBracket] = useState('');

  const [timeFrame, setTimeFrame] = useState('');

  const handleCheckboxChange = (type) => {
    setAssetTypes((prevAssetTypes) => ({
      ...prevAssetTypes,
      [type]: !prevAssetTypes[type],
    }));
  };

  const handleSubmit = () => {
  navigation.push('Screen3B'); // Use push instead of navigate
};

  return (
    <View style={styles.container}>
    <LinearGradient
        colors={['lightblue', 'white']} 
        style={styles.gradient}
        start={{ x: 0, y: 1 }} 
        end={{ x: 0, y: 0 }} 
      >
      <ScrollView contentContainerStyle={styles.container}>
       <Text style={styles.heading}>Item Evaluation</Text>
        <Text style={styles.label}>Type of Asset:</Text>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxItem}>
            <CheckBox
              value={assetTypes.stock}
              onValueChange={() => handleCheckboxChange('stock')}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Stock</Text>
          </View>
          <View style={styles.checkboxItem}>
            <CheckBox
              value={assetTypes.realEstate}
              onValueChange={() => handleCheckboxChange('realEstate')}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Real Estate</Text>
          </View>
          <View style={styles.checkboxItem}>
            <CheckBox
              value={assetTypes.bonds}
              onValueChange={() => handleCheckboxChange('bonds')}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Bonds</Text>
          </View>
          <View style={styles.checkboxItem}>
            <CheckBox
              value={assetTypes.others}
              onValueChange={() => handleCheckboxChange('others')}
              style={styles.checkbox}
            />
            <Text style={styles.checkboxLabel}>Others</Text>
          </View>
        </View>

        <Text style={styles.label}>Tax Bracket:</Text>
        <Picker
          selectedValue={taxBracket}
          onValueChange={(itemValue) => setTaxBracket(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select Tax Bracket" value="" />
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
        </Picker>

        <Text style={styles.label}>Time Frame:</Text>
        <TextInput
          placeholder="Enter Time Frame"
          value={timeFrame}
          onChangeText={(text) => setTimeFrame(text)}
          style={styles.input}
        />

        <Button
          title="Submit"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
      </ScrollView>

    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
    color: 'blue', 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'blue',
  },
  checkboxContainer: {
    marginBottom: 20,
    
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
    color: '#3498db',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  picker: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#ecf0f1',
    color: '#333',
    borderRadius:20,
  },
  input: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ecf0f1',
    color: '#333',
    borderRadius:20,
  },
  submitButton: {
    backgroundColor: '#3498db',
    color: '#fff',
  }
});

export default Screen3;
