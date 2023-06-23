import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    rooms_name: {
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        color: colors.primary,
        borderColor: colors.primary

    }
})