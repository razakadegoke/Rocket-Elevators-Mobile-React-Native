import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import { useState, useRef } from 'react';
import { userList } from './UserList';

export default function LoginPage(props) {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    
    const emailInput = useRef()
    const passwordInput = useRef()

    return (
        <View style={styles.container}>
            <Image source={require('../assets/R2-01.jpeg')} style={styles.img} />
            <View style={styles.inputView}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.textInput} onChangeText={text => setEmail(text)} ref={emailInput}/>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} onChangeText={text => setPassword(text)} ref={passwordInput}/>
            </View>
            <TouchableOpacity style={styles.loginBtn} title="Login" onPress={() => {
                    if(userList.includes(email) && password === "password123"){
                        props.setIsConnect(true)
                    }else{
                        emailInput.current.clear()
                        passwordInput.current.clear()
                    }
                }}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    width: "80%",
    height: 50,
    marginBottom: 30,
    alignItems: "left",
  },
  textInput:{
    fontSize: 20,
    height: 50,
    width: "100 %",
    flex: 1,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#D91A3D",
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: '600'
  },
  label: {
    color: "#ACABAF",
    fontSize: 15,
  },
  img: {
    marginBottom: -70,
    marginTop: -160,
    height: 300,
    width: 300,
  }
});
