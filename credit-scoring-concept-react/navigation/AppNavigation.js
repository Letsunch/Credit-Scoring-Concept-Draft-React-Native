import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../components/Screen1'; 
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3'; 
import Screen4 from '../components/Screen4';
import Screen3B from '../components/Screen3(b)';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Credit Score" component={Screen1} options={{ headerShown: false }}/>
        <Tab.Screen name="Personal Expenditure" component={Screen2} options={{ headerShown: false }}/>
        <Tab.Screen name="Item Valuation" component={Screen3} options={{ headerShown: false }}/>
        <Tab.Screen name="Loan Application" component={Screen4} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
