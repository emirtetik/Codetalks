import { StyleSheet } from 'react-native'
import colors from "../../styles/colors"

const base_styles = StyleSheet.create({

    container: {
        margin:5,
        padding:10,
                borderRadius:5,
                borderWidth:1,
                alignItems: 'center',
    },
    title:{
                fontSize:17,
                fontWeight:'bold',
    }

}); 

export default {
    primary: StyleSheet.create({
          ...base_styles,

        container: {
            ...base_styles.container,
                    backgroundColor:'rgba(255, 255, 255, 0.5)',
                    borderColor:colors.primary,
        },
        title:{
            ...base_styles.title,

                    color:colors.primary
        }
    
    }) ,
    secondary : StyleSheet.create({
      ...base_styles,
        container: {
            ...base_styles.container,

                    backgroundColor:colors.white,
                    borderColor:colors.primary,
        },
        title:{
        ...base_styles.title,
                    color: colors.primary
        }
    
    }) }
