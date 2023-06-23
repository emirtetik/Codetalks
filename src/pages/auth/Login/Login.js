import { View,Text } from 'react-native'
import React, { useState } from 'react'
import styles from "./Login.styles"
import Input from "../../../components/Input/Input"
import Button from '../../../components/Button/Button'
import {Formik} from 'formik'
import  auth  from '@react-native-firebase/auth'
import { showMessage} from "react-native-flash-message";
import authErrorMessage from '../../../utils/authErrorMessage'
const initialFormValues = {
     usermail: "",
     password: "",
}

const Login = ({navigation}) =>{
             const [loading, setLoading] = useState(false);

            async function handleFormLogin(formValues) {

              try{
                setLoading(true);
             await auth().signInWithEmailAndPassword(
                formValues.usermail,
                 formValues.password
                 )
                setLoading(false)

              }catch(error){
                setLoading(false)

                showMessage({

                  message:authErrorMessage(error.code),
                  type: "danger",
                });

              }
            }

      function handleSignUp() {
         navigation.navigate("SignPage")
        
      }
    return(
        <View style={styles.container}>
            <Text style={styles.headers}>Codetalks</Text>

            <Formik  initialValues={initialFormValues} onSubmit={handleFormLogin}>

              {({values,handleChange,handleSubmit}) => (
                <>
            <Input  onType={handleChange("usermail")} value={values.usermail} placeholder="e postanızı giriniz" style={styles.input} /> 
            <Input  onType={handleChange("password")} value={values.password} placeholder="şifrenizi giriniz" isSecure style={styles.input}/> 
           <Button text="giriş yap" thema="primary" onPress={handleSubmit}  loading={loading}/>

           </>
              )}         
           </Formik>
           <Button text="Kayıt ol" thema="secondary" onPress={handleSignUp}/>


        </View>
    )
}
export default Login