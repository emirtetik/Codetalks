import { StyleSheet,Platform } from 'react-native'
import colors from "../../../styles/colors"
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    headers: {
        color: colors.white,
        margin:5,
        fontSize: Platform.OS === "android" ? 160: 160,
        alignSelf: "center"
    }

})