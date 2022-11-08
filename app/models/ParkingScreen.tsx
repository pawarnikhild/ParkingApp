import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { StackNavigationParamList } from '../routes/StackNavigation';
import {
  addVehicle,
  generateBill,
  changeModalVisibility,
  changeVehicleNoInput,
} from '../redux/actions/actions';

import ParkingScreenView from '../views/ParkingScreenView';

const ParkingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList, 'Parking'>>();
  const data = useSelector((state: any) => state.parkingSlotsReducer);
  const modalVisibility = useSelector((state: boolean) => state.modalReducer)
  const vehicleNoInput = useSelector((state: string) => state.registrationVehicleNoInputReducer)
  const dispatch = useDispatch();
  const [refreshFlatlist, setRefreshFlatList] = useState(false);
  const [isFocused, setISFocused] = useState(useIsFocused()); // Following state is defined just to refresh the page after comming back to page
  

  const showNoVehicleNoToast = () => {
    ToastAndroid.show("Enter vehicle number !", ToastAndroid.SHORT);
  };

  const showVehicleParkedToast = () => {
    ToastAndroid.show("Vehicle parked successfully !", ToastAndroid.SHORT);
  };

  const showNoParkToast = () => {
    ToastAndroid.show("There is no parking space available !", ToastAndroid.SHORT);
  };

  const changeVisibility = (param: boolean) => {
    if(data.noOfAvailableParkingSlots == 0) {
      showNoParkToast();
    } else {
      dispatch(changeModalVisibility(param))
    }
  }

  const handleVehicleNoInputChange = (param: string) => {
    dispatch(changeVehicleNoInput(param))
  }

  const add = () => {
    if( vehicleNoInput.length <= 0) {
      showNoVehicleNoToast();      
    } else {
      changeVisibility(false);
      dispatch(addVehicle(vehicleNoInput));
      setRefreshFlatList(!refreshFlatlist);      
      // changeVisibility(false);
      dispatch(changeModalVisibility(false))
      showVehicleParkedToast();
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
      changeVisibility={changeVisibility}
      handleVehicleNoInputChange={handleVehicleNoInputChange}
      handleParkingBlockPress={handleParkingBlockPress}
      add={add}
    />
  );
};

export default ParkingScreen;
