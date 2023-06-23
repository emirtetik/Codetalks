import React, {useState} from 'react'
import { View,Text } from 'react-native'
import styles from "./Sign.styles"
import Input from "../../../components/Input/Input"
import Button from '../../../components/Button/Button'
import { Formik } from 'formik'
import  auth  from '@react-native-firebase/auth'
import { showMessage} from "react-native-flash-message";
import authErrorMessage from '../../../utils/authErrorMessage'
const initialFormValues = {
    usermail: "",
    password: "",
    repassword: "",
};

function Sign({navigation}){
    const [loading,setLoading] = useState(false)

    function handleLogin() {
         navigation.goBack()
    }
     
   async function handleSingIn(formValues) {
        if(formValues.password !== formValues.repassword){
            showMessage({
                message: "şifreler uyuşmuyor",
                type:"danger"
             })
             return;
        }
         try {
            setLoading(true);
         await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.password)
             showMessage({
                message:'kullanıcı oluşturuldu.',
                type: "success",
              });
             setLoading(false)
             navigation.navigate("LoginPage")
         } catch (error) {
            console.log(error);
              setLoading(false)

         }
    }

    return(
        <View style={styles.container}>
        <Text style={styles.headers}>Codetalks</Text>
        <View>
        <Formik initialValues={initialFormValues} onSubmit={handleSingIn}>
            {({values,handleChange,handleSubmit}) => (
    <>
        <Input placeholder="e-postanızı giriniz" value={values.usermail}  onType={handleChange("usermail")} /> 
        <Input placeholder="şifrenizi giriniz"  value={values.password} onType={handleChange("password")} isSecure/> 
        <Input placeholder="şifrenizi tekrar giriniz"  value={values.repassword} onType={handleChange("repassword")} isSecure/> 
        <Button text="Kayıt ol" onPress={handleSubmit} loading={loading} />

    </>

)}

       </Formik>
       </View>
       <Button text="geri gel"thema="secondary" onPress={handleLogin}/>

    </View>
    )
}
export default Sign