import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        margin: 8,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        color: 'white',
        fontSize: 15,

    },
    date: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'white'
    },
    text: {
        fontSize: 15,
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    },
   

})