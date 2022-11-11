import React, { useState } from 'react'
import { ToastAndroid } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux'

import { StackNavigationParamList } from '../routes/StackNavigation';
import { removeVehicle } from '../redux/actions/actions'

import { api200 } from '../services/api200'

import BillingScreenView from '../views/BillingScreenView'

const BillingScreen = () => {
  const route = useRoute<RouteProp<StackNavigationParamList, 'Billing'>>();
  const navigation = useNavigation<StackNavigationProp<StackNavigationParamList, 'Billing'>>();
  const { item } = route.params;
  const dispatch = useDispatch();
  
  const showPaymentToast = () => {
    ToastAndroid.show("Payment taken successfully !", ToastAndroid.SHORT);
  };
  const payload = {'car-registration': item.vehicleNo, 'charge': item.parkingCharge }

  const remove = async (param: number) => {
    showPaymentToast();
    navigation.navigate('Parking');
    dispatch(removeVehicle(param));
    console.log('Removed vehicle', item.vehicleNo)
    await api200(payload);
  };

  console.log('Item in billing screen:', item)

  return (
    <BillingScreenView
      item={item}
      remove={remove}
    />
  )
}

export default BillingScreen