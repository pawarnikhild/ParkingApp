import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    heading: {
        marginTop: 220,
        textAlign: 'center',
        fontSize: FontSize.heading,
        color: AppColor.black,
        // backgroundColor: 'green'
    },
    customTextInput: {
        marginTop: 40
    },
    customButton: {
        marginTop: 12,
        padding: 12
    }
});