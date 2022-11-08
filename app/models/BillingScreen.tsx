import React, { useState } from 'react'
import { ToastAndroid } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { StackNavigationParamList } from '../routes/StackNavigation';
import { removeVehicle } from '../redux/actions/actions'

import { api200 } from '../services/api200'

import BillingScreenView from '../views/BillingScreenView'

const BillingScreen = () => {
  const route = useRoute<RouteProp<StackNavigationParamList, 'Billing'>>();
  const { item } = route.params;
  const dispatch = useDispatch();
  
  const showPaymentToast = () => {
    ToastAndroid.show("Payment taken successfully !", ToastAndroid.SHORT);
  };
  const payload = {'car-registration': item.vehicleNo, 'charge': item.parkingCharge }

  const remove = async (param: number) => {
    dispatch(removeVehicle(param));
    await api200(payload);
    showPaymentToast();
  };

  console.log('parkingSlotId', item)

  return (
    <BillingScreenView
      item={item}
      remove={remove}
    />
  )
}

export default BillingScreen