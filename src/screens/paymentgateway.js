import React from 'react';
import { View, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default function Pay() {

  const makePayment2500 = () => {
    var options = {
      description: 'WhiskySamba',
      image: 'https://img.etimg.com/thumb/msid-58906902,width-650,imgsize-170486,,resizemode-4,quality-100/.jpg',
      currency: 'INR',
      key: 'rzp_test_KDMjRXGIN8xhg9', // Your api key
      amount: '250000',
      name: 'Access fee',
      theme: {color: '#000000'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }

  const makePayment4000 = () => {
    var options = {
      description: 'WhiskySamba',
      image: 'https://img.etimg.com/thumb/msid-58906902,width-650,imgsize-170486,,resizemode-4,quality-100/.jpg',
      currency: 'INR',
      key: 'rzp_test_KDMjRXGIN8xhg9', // Your api key
      amount: '400000',
      name: 'FasTrack VIP Access',
      theme: {color: '#000000'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }


  return(
    <View style= {{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Button 
        title= "Make a Payment- Rs. 2500"
        onPress= {makePayment2500}
      />
      <Button 
        title= "Make a Payment- Rs. 4000"
        onPress= {makePayment4000}
      />
    </View>
  )
  }