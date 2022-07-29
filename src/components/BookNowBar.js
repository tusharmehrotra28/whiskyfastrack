import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay'; 

const BookNowBar = (props) => {
    const navigation = useNavigation();
    const route = useRoute();

    

    const onClickBook = () => {
    // Linking.openURL('https://rzp.io/l/uYQ7tXPvNA'); 

      navigation.navigate('Status')
      Alert.alert("Please take a screen shot of this QR and flash it at the counter to redeem your credit.")
    }
    

    
  return (
    <View style={styles.container}>
      <View style={styles.priceView}>
        <Text style={styles.title}>Total Price</Text>
        <Text style={styles.totalPrice}>₹ {props.total}</Text>
      </View>

      <TouchableOpacity onPress={onClickBook} style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {    
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        // backgroundColor: '#f5f5f5'
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 15,
        letterSpacing: 1.1,
        fontWeight: '500', 
        marginTop: 20
    },
    totalPrice: {   
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20
    },
    button: {   
        height: 60,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#F70054',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        letterSpacing: 1.2,
    },
})



export default BookNowBar