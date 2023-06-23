import { StyleSheet,Dimensions } from 'react-native'

const device = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        margin:10,
        marginHorizontal:10,
        padding:18,
        borderRadius:10,
        height:device.height /3,
    },
    modal: {
        justifyContent: 'flex-end',
        margin:0,
    },
    input_container: {
        flex: 1,
    }
})