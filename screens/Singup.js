import { StyleSheet, Text, View, Image ,TouchableOpacity, ActivityIndicator} from "react-native";
import React,{ useState } from "react";
import InputText from "../componnents/InputText";
import PrimaryBtn from "../componnents/PrimaryBtn";
import Secondary from "../componnents/Secondary";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import Toast from "react-native-toast-message";

const Singup = ({navigation}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCpassword] = useState('')
    const [loading, setLoading] = useState(false);

    const handleSignUp = async ()=>{
        setLoading(true);
        try{
            const user = await createUserWithEmailAndPassword(auth,email,password,cPassword)
            // Alert.alert('user created')
            showSuccess()
            setEmail('');
            setCpassword('');
            setPassword('');
            setTimeout(()=>{
                navigation?.navigate('HomeScreen')
            },1000)
        }catch(error){
          showError(error.message)
            
    }finally {
      setLoading(false); }
    }

    const showSuccess = () => {
      Toast.show({
        type: 'success',
        text1: 'Yay!',
        text2: 'Signed up Successfully'
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
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logoColor}
          />
        </View>

        <View style={styles.mainView}>
          <InputText
            email={"email"}
            placeholder={"Enter Your Email"}
            keyboardType={"email"}
            value={email}
            onChangeText={setEmail}
          />
          <InputText
            lock={"lock"}
            placeholder={"Enter Your Password"}
            keyboardType={"password"}
            eye={"remove-red-eye"}
            value={password}
            onChangeText={setPassword}
          />
          <InputText
            lock={"lock"}
            placeholder={"Confirm Your Password"}
            keyboardType={"password"}
            eye={"remove-red-eye"}
            value={cPassword}
            onChangeText={setCpassword}
          />
        </View>
        <View style={styles.loginBtn}>
          <PrimaryBtn title={loading ? "Signing Up..." : "Sign Up"} onPress={handleSignUp} />
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
        <View style={styles.secondaryBtn}>
        <Secondary title={'Continue With Google'} Google={()=>{}}/>
        <Secondary title={'Continue With Apple'} Apple={()=>{}}/>
      </View>
      <View style={styles.AccountCreateText}>
        <Text style={styles.textone}>Already have an account?</Text>
        <TouchableOpacity onPress={()=>navigation?.navigate("LoginScreen")}><Text style={styles.textTwo}> Log in</Text></TouchableOpacity>
      </View>
      </View>
    </>
  );
};

export default Singup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
  },
  imageView: {
    paddingTop: 70,
    paddingBottom: 75,
  },
  logoColor: {
    tintColor: "blue",
  },
  mainView: {
    width: "90%",
    gap: 20,
  },
  loginBtn: {
    paddingTop: 10,
    width: "90%",
  },
  secondaryBtn:{
    width:"90%",
    paddingTop:30,
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
});
