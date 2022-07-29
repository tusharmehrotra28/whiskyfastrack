import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const OTPScreen = () => {
   
    const [OTP, setOTP] = useState();
    const route = useRoute();
    const navigation = useNavigation();

    // const onChangeOTP = (OTP) => {
    //     setOTP(OTP)
    // }

    const onPressSubmit = () => {
        
        navigation.navigate('Home')   
    }

    

  return (
    <View style={styles.container}>
            <Text style={styles.text}>Enter Verification Code</Text>

            <View style={{flexDirection: 'row'}}>
            <TextInput 
            style={styles.phoneInputStyle}
            placeholder=""
            selectionColor='#F70064'
            keyboardType="numeric"
            keyboardAppearance='light'
            secureTextEntry={false}
            // onChangeText={onChangeOTP}
            maxLength={4}
            />
            </View>

         
            <TouchableOpacity style={styles.btnContainer} onPress={onPressSubmit}>
                    <View style={styles.btnContinue}>
                        <Text style={[
                            styles.textContinue,
                            {
                                color: OTP? 'black' : '#000',
                                opacity: OTP? 1 : 0.3,
                                fontWeight: '600'
                            }
                            ]}>Login</Text>
                    </View>
                </TouchableOpacity>
            
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: '50%',
        alignItems: 'center',
        backgroundColor: "#F70054"
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff"
    }, 
    subtext: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    phoneInputStyle: {
        width: 150,
        height: 50,
        borderRadius: 15,
        fontSize: 30,
        letterSpacing: 1.5,
        color: '#fff',
        textAlign: 'center',
        borderColor: "#fff",
        borderWidth: 2,
        marginTop: 40,
        marginHorizontal: 15,
    },
    btnContainer: {
        marginTop: 70,
    },
    btnContinue: {
        width: 250, 
        height: 50, 
        borderRadius: 30, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#F70054",
        borderWidth: 1,
    },


})

export default OTPScreen