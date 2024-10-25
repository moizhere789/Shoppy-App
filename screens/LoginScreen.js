import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import InputText from '../componnents/InputText';
import PrimaryBtn from '../componnents/PrimaryBtn';
import Secondary from '../componnents/Secondary';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import Toast from 'react-native-toast-message';



const LoginScreen = ({navigation}) => {
  
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [loading, setLoading] = useState(false);

    const handleLogin = async ()=>{
      setLoading(true);
      try{
        await signInWithEmailAndPassword(auth ,email,password)
        showSuccess()
        setEmail("")
        setPassword("")
        setTimeout(()=>{
          navigation?.navigate('BottomNavigator')
        })
        // console.warn("loged in ")
      }catch(error){
        showError(error.message)
        // console.warn(error.code , error.message)
      }finally {
        setLoading(false); }
    }

    const showSuccess = () => {
      Toast.show({
        type: 'success',
        text1: 'Yay!',
        text2: 'Signed In Successfully'
      });
    }

    const showError = (message) => {
      Toast.show({
        type: 'error',
        text1: 'Something Went Wrong',
        text2: message || 'Try Again'
      });
    }
   
  return (
    <>
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require("../assets/images/logo.png")} style={styles.logoColor}/>
      </View>
      <View style={styles.mainView}>
      <InputText email={'email'} placeholder={'Enter Your Email'} keyboardType={'email'} value={email} 
      onChangeText={setEmail}/>
      <InputText lock={'lock'} placeholder={'Enter Your Password'} keyboardType={'password'} eye={'remove-red-eye'}
      value={password} onChangeText={setPassword}/>
      
      </View>
     <View style={styles.forgetbtnView}> 
        <TouchableOpacity >
        <Text style={styles.forgetbtnText}>Forget Password ?</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.loginBtn}>
        <PrimaryBtn title={loading ? "Logging..." : "Log In"} onPress={handleLogin}/>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
      </View>
      <View style={styles.secondaryBtn}>
        <Secondary title={'Continue With Google'} Google={()=>{}}/>
        <Secondary title={'Continue With Apple'} Apple={()=>{}}/>
      </View>
      <View style={styles.AccountCreateText}>
        <Text style={styles.textone}>I don’t have an account?</Text>
        <TouchableOpacity onPress={()=>navigation?.navigate('Singup')}><Text style={styles.textTwo}> Sign Up</Text></TouchableOpacity>
      </View>
    </View>
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        gap:15,
    },
    forgetbtnText:{
        color:"#06F",
    },
    forgetbtnView:{
        width:'90%',
        alignItems:'flex-end',
        
    },
    mainView:{
        width:"90%",
        gap:20,
    },
    imageView:{
        paddingTop:70,
        paddingBottom:75,
    },
    logoColor:{tintColor:"blue"},

    loginBtn:{
        width:"90%",
        paddingTop:8,

    },
    secondaryBtn:{
        width:"90%",
        paddingTop:40,
        gap:20,
    },
    AccountCreateText:{
        flexDirection:"row",
        gap:8,
        paddingTop:20,
    },
    textone:{
        fontSize:16,
        color:"#212121",
        fontWeight:"400"
    },
    textTwo:{
        fontSize:16,
        color:"#2750E1",
        fontWeight:"700"
    },
    

})