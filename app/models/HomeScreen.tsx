import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { StackNavigationParamList } from '../routes/StackNavigation';
import {
  produceParkingSlots,
} from '../redux/actions/actions';

import HomeScreenView from '../views/HomeScreenView';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList, 'Home'>>();
  const dispatch = useDispatch();
  // Decalre noOfParkingSlots as number or string it works but TypeScript gives error.
  // Here we are declaring it as string because TextInput's return type is string.
  const [noOfParkingSlots, setNoOfParkingSlots] = useState('');

  const showToast = () => {
    ToastAndroid.show('Enter something', ToastAndroid.SHORT);
  };

  const handleButtonPress = () => {
    if (noOfParkingSlots.length <= 0) {
      // if(noOfParkingSlots <= 0) {
      showToast();
    } else {
      setNoOfParkingSlots('');
      dispatch(produceParkingSlots(+noOfParkingSlots)); // Here we are converting
      // type of noOfParkingSlots from string to number by placing + in front of
      // string variable.
      console.log('Created', noOfParkingSlots, 'parking slots');
      navigation.navigate('Parking');
    }
  };

  // console.log('No of ParkingSlots:', noOfParkingSlots);

  return (
    <HomeScreenView
      noOfParkingSlots={noOfParkingSlots}
      setNoOfParkingSlots={setNoOfParkingSlots}
      handleButtonPress={handleButtonPress}
    />
  );
};

export default HomeScreen;
