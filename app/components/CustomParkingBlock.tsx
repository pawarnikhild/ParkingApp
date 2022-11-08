import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import { AppColor, FontSize } from '../utils/StyleConstant'

type CustomParkingBlockProps = {
    parkingId: number
    parkedVehicle?: string
    occupied: boolean
    style: any
    onPress: () => void
}

const CustomParkingBlock = (props: CustomParkingBlockProps) => {
    let blockColor = props.occupied ? AppColor.darkBlue :AppColor.white;
    let textColor = props.occupied ? AppColor.white : AppColor.black;
  return (
    <TouchableOpacity style={[{...styles.customParkingBlock, ...props.style}, {backgroundColor: blockColor}]}
      disabled={!props.occupied}
      onPress={props.onPress}
    >
      <Text style={{...styles.parkingNo, color: textColor}}>{props.parkingId}</Text>
      <Text style={{...styles.registeredCar, color: textColor}}>{props.parkedVehicle}</Text>
      {
        props.occupied ? <Text style={{...styles.normalText, color: textColor}}>Tap to checkout</Text> : null 
      }
    </TouchableOpacity>
  )
}

export default CustomParkingBlock

const styles = StyleSheet.create({
    customParkingBlock: {
        height: 80,
        width: 160,
        backgroundColor: AppColor.white,
        borderWidth: 3,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    parkingNo: {
        fontSize: FontSize.small,
        fontWeight: 'bold',
        color: AppColor.black
    },
    registeredCar: {
        fontSize: FontSize.small,
        // fontWeight: 'bold',
        color: AppColor.black
    },
    normalText: {
      fontSize: FontSize.micro,
      color: AppColor.black
    }
})