import React from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from "./Button.style"

const Button = ({ text, onPress, loading, thema = "primary" }) => {

    return (
        <TouchableOpacity style={styles[thema].container} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color="black" />
            ) : (
                <Text style={styles[thema].title}>{text}</Text>
            )}
        </TouchableOpacity>
    )
}

export default Button;
