import React from 'react'
import { TextInput,View } from 'react-native'
import styles from "./Input.style"
function Input({placeholder,onType,value,isSecure }) {
    return(
        <View style={styles.container}>
            <TextInput value={value}  placeholder={placeholder}  placeholderTextColor="white" onChangeText={onType} secureTextEntry={isSecure}  autoCapitalize="none" style={styles.input}/>
        </View>
    )
    
}
export default Input