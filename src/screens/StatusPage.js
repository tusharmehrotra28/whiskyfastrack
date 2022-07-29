import { View, Text, ImageBackground, StyleSheet, ScrollView, Button, TouchableOpacity, ImageBackgroundBase, Pressable } from 'react-native'
import React, {useState} from 'react'
import PaymentConfirmation from '../components/PaymentConfirmation'


const StatusPage = (route, navigation) => {


  return (
    <View style={styles.container}>
      
      <View style={styles.titleView}>
        <Text style={styles.title}>Boarding Pass</Text>
      </View> 

      <PaymentConfirmation name={"Pratt Shankr" } contact={"+91 9818771080"} method={"VISA **2768"} numGuests={"5"}/>
    
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#000',
  },
  titleView: {
     marginRight: "30%",
     marginLeft: "2%",
     marginTop: "20%",
     marginBottom: '7%',
     zIndex: 10
  },
  title: {
      fontSize: 30,
      color: "#fff",
      letterSpacing: 1.7,
      textAlign: 'center',
      fontWeight: '700',
  }, 


})
export default StatusPage