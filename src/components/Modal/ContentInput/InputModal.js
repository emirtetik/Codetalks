import React,{useState} from 'react'
import { View,Text, TextInput } from 'react-native'
import Button from '../../Button/Button'
import styles from "./InputModal.style"
import  Modal  from 'react-native-modal'

function InputModal({visible, onClose, onSend,placeholderText,buttonText}) {
     const [text, setText] = useState(null)

      function handleSend() {
        if(!text){
            return;

        }
        onSend(text)
        setText(null)
        
      }
 return(
    <Modal isVisible={visible}
     onSwipeComplate={onClose} 
     onBackdropPress={onClose}
      onBackButtonPress={onClose}
       swipeDirection="down" 
       style={styles.modal} >
        
        <View style={styles.container}>
             <View style={styles.input_container}>
            <TextInput 
            placeholder={placeholderText}
             onChangeText={setText}
             multiline
            />
            </View>
            <Button text={buttonText} onPress={handleSend} />
        </View>
        </Modal>
 )   
}
export default InputModal