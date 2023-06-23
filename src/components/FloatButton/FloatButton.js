import React from 'react'
import {TouchableOpacity } from 'react-native'
import styles from "./FloatButton.style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
const FloatButton = ({icon,onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} >

        <Icon name={icon} size={35} style={styles.icon}/>

    </TouchableOpacity>
    )
}
export default FloatButton