import { StyleSheet } from "react-native";
import { AppColor, FontSize } from "../utils/StyleConstant";

export default StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: FontSize.heading,
        color: AppColor.black,
    },
    row : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    field: {
        color: AppColor.black,
        fontSize: FontSize.medium,
        fontWeight: 'bold',
    },
    data: {
        color: AppColor.black,
        fontSize: FontSize.medium,
    },
    customButton: {
        marginTop: 20,
        padding: 8
    },
});