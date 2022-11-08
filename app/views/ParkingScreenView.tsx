import React from 'react';
import { SafeAreaView, StatusBar, View, Text, FlatList } from 'react-native';

import CustomParkingBlock from '../components/CustomParkingBlock';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

import GlobleStyles from '../utils/GlobleStyles';
import { AppColor } from '../utils/StyleConstant';
import ParkingScreenStyle from '../styles/ParkingScreenStyle';

type ParkingScreenViewProps ={
  data: any,
  modalVisibility: boolean
  vehicleNoInput: string
  refreshFlatlist: boolean
  changeVisibility: (active: boolean) => void
  handleVehicleNoInputChange: (active: string) => void
  handleParkingBlockPress: (active: number) => void
  add: () => void
}
const ParkingScreenView = (props: ParkingScreenViewProps) => {
  const {
    data,
    modalVisibility,
    vehicleNoInput,
    refreshFlatlist,
    changeVisibility,
    handleVehicleNoInputChange,
    handleParkingBlockPress,
    add,
  } = props;

  const renderItem = ({item} : { item :{id: number, registeredVehicle: string, occupied: boolean, customParkingBlock: any}}) => (
    <CustomParkingBlock
      parkingId={item.id}
      parkedVehicle={item.registeredVehicle}
      occupied={item.occupied}
      style={ParkingScreenStyle.customParkingBlock}
      onPress={() => {
        handleParkingBlockPress(item.id);
      }}
    />
  );

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <Text style={ParkingScreenStyle.normalText}>Available spaces: {data.noOfAvailableParkingSlots} out of {data.parkingSlots.length}</Text>
      <FlatList
        data={data.parkingSlots}
        renderItem={renderItem}
        numColumns={2}
        extraData={refreshFlatlist}
        style={ParkingScreenStyle.flatList}
        contentContainerStyle={ParkingScreenStyle.flatListChilds}
      />
      <View style={ParkingScreenStyle.bottomContainer}>
        {!modalVisibility ? (
          <CustomButton
            title="Add New Parking"
            style={ParkingScreenStyle.customButton}
            onPress={() => {
              changeVisibility(true);
            }}
          />
        ) : (
          <View style={ParkingScreenStyle.modalView}>
            <CustomTextInput
              style={ParkingScreenStyle.customTextInput}
              placeholder="Enter vehicle number"
              placeholderColor={AppColor.grey}
              value={vehicleNoInput}
              onChangeText={text => {
                handleVehicleNoInputChange(text);
              }}
            />
            <View style={ParkingScreenStyle.row}>
              <CustomButton
                title="CANCEL"
                style={{...ParkingScreenStyle.modalButton, width: '30%'}}
                onPress={() => {
                  props.changeVisibility(false);
                }}
              />
              <CustomButton
                title="SUBMIT"
                style={{...ParkingScreenStyle.modalButton, width: '66%'}}
                onPress={() => {
                  add();
                }}
              />
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ParkingScreenView;
