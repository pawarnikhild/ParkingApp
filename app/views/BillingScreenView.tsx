import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'

import CustomButton from '../components/CustomButton'

import GlobleStyles from '../utils/GlobleStyles'
import BillingScreenStyle from '../styles/BillingScreenStyle'

type BillingScreenViewProps = {
  item: {
    id: number
    vehicleNo: string
    timeSpent: number
    parkingCharge: number
  }
  remove: (activeL: number) => void
}

const BillingScreenView = (props: BillingScreenViewProps) => {
  const { item, remove } = props;

  return (
    <SafeAreaView style={GlobleStyles.appContainer}>
      <StatusBar />
      <Text style={BillingScreenStyle.heading}>Billing Screen</Text>
      <View style={BillingScreenStyle.row}>
          <Text style={BillingScreenStyle.field}>Vehicle Registration: </Text>
          <Text style={BillingScreenStyle.data}>{item.vehicleNo}</Text>
      </View>
      <View style={BillingScreenStyle.row}>
          <Text style={BillingScreenStyle.field}>Time Spent: </Text>
          <Text style={BillingScreenStyle.data}>{item.timeSpent} Hrs</Text>
      </View>
      <View style={BillingScreenStyle.row}>
          <Text style={BillingScreenStyle.field}>Parking Charge: </Text>
          <Text style={BillingScreenStyle.data}>{item.parkingCharge} Rs</Text>
      </View>
        <CustomButton
          title='PAYMENT TAKEN'
          style={BillingScreenStyle.customButton}
          onPress={() => {remove(item.id)}}
        /> 
    </SafeAreaView>
  )
}

export default BillingScreenView