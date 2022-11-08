import { StyleSheet } from "react-native";

import { AppColor, FontSize } from "../utils/StyleConstant";
export default StyleSheet.create({
    normalText: {
        textAlign: 'center',
        fontSize: FontSize.medium,
        color: AppColor.black,
        marginBottom: 8
    },
    flatList: {
        height: '70%',
        // backgroundColor: 'red',
    },
    flatListChilds: {
        alignItems: 'center'
    },
    customParkingBlock: {
        marginTop: 16,
        marginHorizontal: 8
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    customButton: {
        marginBottom: 10,
        padding: 12
    },
    modalView: {
        // height: 200,
        height: 130,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: AppColor.white,
        padding: 20,
        justifyContent: 'space-between',
    },
      customTextInput: {
          height: 40
    },
      row: {
          flexDirection: 'row',
          justifyContent: 'space-between'
    },
      modalButton: {
          paddingVertical: 6
    },
});