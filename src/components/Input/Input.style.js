import { StyleSheet ,Platform} from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
     container: {
          margin:10,
          padding:3,
          backgroundColor:"Transparent",
          flexDirection:"row",
          borderBottomWidth:1,
          borderColor: colors.white,

     },
     input: {
          flex:1,
         padding:Platform.OS === "android" ? 0 : 5,

     }
})