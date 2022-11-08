import React from 'react'
import { StyleSheet, TextInput, ViewStyle } from 'react-native'

import { AppColor, FontSize } from '../utils/StyleConstant'

type CustomInputProps = {
    placeholder: string
    placeholderColor: string
    keyboard?: string
    value: string
    style: ViewStyle

    onChangeText: (active: string) => void
}
const CustomTextInput = (props: CustomInputProps) => {
  return (
    <TextInput
        style={{...styles.CustomTextInput, ...props.style}}
        placeholder={props.placeholder}
        placeholderTextColor={ props.placeholderColor}
        value={props.value}
        // keyboardType='numeric'
        autoCapitalize = "characters"
        keyboardType={props.keyboard}
        onChangeText={props.onChangeText}
    />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    CustomTextInput: {
      // height: 40,
      // padding: 5,
        backgroundColor: AppColor.white,
        borderWidth: 2,
        borderColor: AppColor.black,
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: FontSize.small,
    }
})