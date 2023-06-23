import { StyleSheet,Dimensions } from 'react-native'
import colors from '../../styles/colors'

const device = Dimensions.get("window")

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 7,
        padding: 5,
         backgroundColor: colors.primary
    },
    body_container: {
        height: device.height/3.5,
        width: device.width/2.3, 
        backgroundColor: colors.white,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        color: colors.white
    }

})