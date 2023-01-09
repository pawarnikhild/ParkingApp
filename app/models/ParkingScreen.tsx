import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { StackNavigationParamList } from '../routes/StackNavigation';
import { addVehicle, generateBill } from '../redux/actions/actions';

import ParkingScreenView from '../views/ParkingScreenView';

const ParkingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList, 'Parking'>>();
  const data = useSelector((state: any) => state.parkingSlotsReducer);
  const dispatch = useDispatch();
  const [refreshFlatlist, setRefreshFlatList] = useState(false);
  const [isFocused, setISFocused] = useState(useIsFocused()); // This state is defined just to refresh the page after comming back to page
  const [vehicleNoInput, setVehicleNoInput] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  const showNoVehicleNoToast = () => {
    ToastAndroid.show("Enter something !", ToastAndroid.SHORT);
  };

  const showVehicleParkedToast = () => {
    ToastAndroid.show("Vehicle added successfully !", ToastAndroid.SHORT);
  };

  const showNoParkToast = () => {
    ToastAndroid.show("There is no parking space available !", ToastAndroid.SHORT);
  };

  const handleModalVisibility = (param: boolean) => {
    if(data.noOfAvailableParkingSlots == 0) {
      showNoParkToast();
    } else {
      setModalVisibility(param);
    }
  }

  const add = () => {
    if( vehicleNoInput.length <= 0) {
      showNoVehicleNoToast();      
    } else {
      dispatch(addVehicle(vehicleNoInput));
      setRefreshFlatList(!refreshFlatlist);      
      setVehicleNoInput('');
      handleModalVisibility(false);
      showVehicleParkedToast();
      console.log('Added vehicle', vehicleNoInput)
    }
  };

  const handleParkingBlockPress = (id: number) => {
    dispatch(generateBill(id));
    // If we pass item(which is part of redux state) then it gives non-serializable warning hence following object is created.
    const payloadToNextScreen = {
      id: id,
      vehicleNo: data.parkingSlots[id].registeredVehicle,
      timeSpent: data.parkingSlots[id].timeSpent,
      parkingCharge: data.parkingSlots[id].parkingCharge
    }
    navigation.navigate('Billing', {item: payloadToNextScreen})
  }

  return (
    <ParkingScreenView
      data={data}
      modalVisibility={modalVisibility}
      vehicleNoInput={vehicleNoInput}
      refreshFlatlist={refreshFlatlist}
      handleModalVisibility={handleModalVisibility}
      setVehicleNoInput={setVehicleNoInput}
      add={add}
      handleParkingBlockPress={handleParkingBlockPress}
    />
  );
};

export default ParkingScreen;
