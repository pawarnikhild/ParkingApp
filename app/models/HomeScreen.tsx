import React from 'react'
import { ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native'
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

    const showToast = () => {
      ToastAndroid.show("Enter something", ToastAndroid.SHORT);
    };

    const handleTextChange = (text: string) => {
        dispatch(changeNoOfParkingSlotInput(text));
    }
    
    const handleButtonPress = () => {
      if(noOfParkingSlots.length <= 0) {
        showToast();
      } else {
        dispatch(produceParkingSlots(noOfParkingSlots))
        navigation.navigate('Parking');
      }
    }

    // console.log('noOfParkingSlots:', noOfParkingSlots);

  return (
    <HomeScreenView
        noOfParkingSlots={noOfParkingSlots}
        handleTextChange={handleTextChange}
        handleButtonPress={handleButtonPress}
    />
  )
}

export default HomeScreen