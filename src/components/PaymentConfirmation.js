import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Card } from 'react-native-paper';
// import Icon from 'react-native-vector-icons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const PaymentConfirmation = (props) => {
    const [date, setDate] = useState(null);
    // const [guest, setGuest] = useState('Pratt Shankar');
    // const [guestContact, setGuestContact] = useState('+91  9818771080');
    // const [payment, setPayment] = useState('VISA *** 2768');
    // const [numGuest, setNumGuest] = useState('5');

    const navigation = useNavigation();

    const onPressQR = () => {
      
      navigation.navigate('QR')
    }
  

    useEffect(() => {
        let today = new Date();
        let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
        setDate(date);
      }, []);

  return (
    <View style={styles.container}>
      <Card style={{backgroundColor: "#fff", width: '85%', height: '87%', borderRadius: 30, alignSelf: 'center', zIndex: 10}}>

        <Text style={styles.cardTitleTop}>Guest Details</Text>
        <Text style={styles.cardText}>{props.name}</Text>
        <Text style={styles.cardText}>{props.contact}</Text>
        

        <Text style={styles.cardTitle}>Payment Method</Text>
        <Text style={styles.cardText}>{props.method}</Text>

        <Image source={{uri: "https://b.zmtcdn.com/data/reviews_photos/3e7/d18b07501d0ab503d0bd9dc659ec83e7_1590941272.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"}} style={{width: '100%', height: '28%', marginTop: 20,  opacity: 0.9}}/>

        <Text style={styles.cardTitle}>Admits</Text>
        <Text style={styles.cardText}>{props.numGuests} Persons on {date}</Text>

        <Text style={styles.cardTitle}>Estimated Time</Text>
        <Text style={styles.cardText}>2-3 Minutes</Text>
        
        <Image source={{uri: "https://barcode.tec-it.com/barcode.ashx?data=Confirmed+Payment&code=Code128&translate-esc=true&eclevel=L&dmsize=Default"}} style={{width: '90%', height: '10%', marginTop: 20, alignSelf: 'center'}}/>

         <TouchableOpacity style={styles.confirmation} >
         <Text style={styles.confirmText}>Payment Confirmed</Text>
         </TouchableOpacity>
        
        
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    cardTitleTop: {
        fontSize: 20,
        fontWeight: '700',
        paddingHorizontal: 10,
        marginLeft: '10%',
        marginTop: '9%',
        marginBottom: '2%',
        letterSpacing: 1.2
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingHorizontal: 10,
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '2%',
        letterSpacing: 1.2
    },
    cardText: {
        paddingHorizontal: 10,
        marginLeft: '10%',
        fontWeight: '400',
        fontSize: 16,
    },
    confirmation: {
        height: 70,
        width: "100%",
        marginTop: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#F70054',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    confirmText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '600',
      letterSpacing: 1.2,
    },
});

export default PaymentConfirmation;