import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles';
import {AppColor} from '../utils/StyleConstant';
import HomeScreenStyle from '../styles/HomeScreenStyle';

type HomeScreenViewProps = {
  inputText: string
  noOfParkingSLots: number;
  handleTextChange: (text: string) => void;
  handleButtonPress: () => void;
};

const HomeScreenView = (props: HomeScreenViewProps) => {
  const {inputText, noOfParkingSLots, handleTextChange, handleButtonPress} = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <Text style={HomeScreenStyle.heading}>Parking Management</Text>
      <CustomTextInput
        style={HomeScreenStyle.customTextInput}
        placeholder="Enter number of parking spaces"
        placeholderColor={AppColor.grey}
        value={inputText}
        keyboard='numeric'
        onChangeText={number => {
          handleTextChange(number);
        }}
      />
      <CustomButton
        title="SUBMIT"
        style={HomeScreenStyle.customButton}
        // buttonDisabled={buttonDisabled}
        onPress={handleButtonPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreenView;
