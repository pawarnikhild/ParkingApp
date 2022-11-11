import React, { useState} from 'react'
import { ToastAndroid} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'

// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { StackNavigationParamList } from '../routes/StackNavigation'; 
import { changeNoOfParkingSlotInput, produceParkingSlots } from '../redux/actions/actions'

import HomeScreenView from '../views/HomeScreenView'

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<StackNavigationParamList,'Home'>>();
    const noOfParkingSlots = useSelector((state) => state.noOfParkingSlotsInputReducer);
    const dispatch = useDispatch();
    const [intputText, setInputText]=useState('')

    const showToast = () => {
      ToastAndroid.show("Enter something", ToastAndroid.SHORT);
    };

    const handleTextChange = (text: string) => {
        setInputText(text)
        dispatch(changeNoOfParkingSlotInput(text));
    }
    
    const handleButtonPress = () => {
      if(noOfParkingSlots.length <= 0) {
        showToast();
      } else {
        setInputText('')
        dispatch(produceParkingSlots(noOfParkingSlots))
        console.log('Created', noOfParkingSlots, 'parking slots')
        navigation.navigate('Parking');
      }
    }

    console.log('No of ParkingSlots:', noOfParkingSlots);

  return (
    <HomeScreenView
        inputText={intputText}
        noOfParkingSlots={noOfParkingSlots}
        handleTextChange={handleTextChange}
        handleButtonPress={handleButtonPress}
    />
  )
}

export default HomeScreen