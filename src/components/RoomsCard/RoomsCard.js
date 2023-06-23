import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styles from "./RoomsCard.style"
const RoomsCard = ({onSelect,rooms}) => {
    return(
        <TouchableOpacity onPress={onSelect} style={styles.container}>
        <View style={styles.body_container}>
         <Text>{rooms.text}</Text>
        </View>
        </TouchableOpacity>
    )
}
export default RoomsCard