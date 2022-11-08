import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

import {AppColor, FontSize} from '../utils/StyleConstant';

type CustonButtonProps = {
  title: string;
  style: any;
  buttonDisabled?: boolean;
  onPress: (active: boolean) => void;
};

const CustomButton = (props: CustonButtonProps) => {
  const color = !props.buttonDisabled ? AppColor.buttonColor : AppColor.grey;
  // console.log('buttonDisabled',props.buttonDisabled)
  return (
    <Pressable
      style={
        ({pressed}) => [
        {backgroundColor: color},
        {opacity: pressed && !props.buttonDisabled ? 0.5 : null},
        {...styles.customButton, ...props.style},
      ]
    }
      disabled={props.buttonDisabled}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    // paddingVertical: 10,
    borderRadius: 4,
    justicyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: AppColor.white,
    fontSize: FontSize.small,
  },
});
