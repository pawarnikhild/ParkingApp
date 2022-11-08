import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../models/HomeScreen'
import ParkingScreen from '../models/ParkingScreen'
import BillingScreen from '../models/BillingScreen'

const Stack = createStackNavigator<StackNavigationParamList>();

export type StackNavigationParamList = {
  Home: undefined;
  Parking: undefined;
  Billing: { item: {
    id: number;
    vehicleNo: any;
    timeSpent: any;
    parkingCharge: any;
  }};
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parking"
          component={ParkingScreen}
          options={{title: 'Parking Screen'}}
        />
        <Stack.Screen
          name="Billing"
          component={BillingScreen}
          options={{title: 'Billing Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation