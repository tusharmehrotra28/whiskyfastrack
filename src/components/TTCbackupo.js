

import React, { useState } from "react";
import { FlatList, SafeAreaView, View, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: "1",
    title: "Basic",
    price: '2500',
    wait: '30',
    icon: 'bolt'
  },
  {
    id: "2",
    title: "VIP Fast-Track",
    price: '4000',
    wait: '2',
    icon: 'rocket'
  },
];

const renderData = (item) => {
      return(
        <View style={{height: '90%', width: '100%', marginLeft: 20 }}>
       <Card style={{backgroundColor: "#fff", width: '60%', height: '100%', borderRadius: 50, marginTop: '5%'}}>
        <TouchableOpacity onPress={() => console.log("click")}>
          <ImageBackground source={{uri: "https://img.etimg.com/thumb/width-640,height-480,imgsize-170486,resizemode-1,msid-58906941/magazines/panache/agood-restaurant-visit-is-a-60-minute-holiday-that-should-satiate-the-soul-saysfoodpreneur-ashish-dev-kapur/whiskysamba.jpg"}} style={{width: '100%', height: '100%', overflow: 'hidden', borderRadius: 50}}>

          
                <View style={{width: '80%', alignItems: "center", flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                    <Text style={styles.heading}>{item.title} Access</Text>
                    <Icon name={item.icon} size={50} color='#fff'/>
                </View>

                <View style={{justifyContent: 'center', marginTop: '30%', alignItems: 'center'}}>
                <Text style={styles.subText}>{item.wait} min waitline</Text>
                </View>

                <View style={{backgroundColor: '#F70054', width: '100%', height: '21%', alignItems: 'center', justifyContent: 'center', marginTop: '7%', borderBottomRightRadius: 60, borderBottomLeftRadius: 60, resizeMode: 'cover'}}>
                  <Text style={styles.price}>Rs. {item.price}</Text>
                </View>

          </ImageBackground>
          </ TouchableOpacity>  
        </Card>

    </View>  
      )
 
    }

const TicketTypeCard = () => {
  
  return (
    <FlatList
            horizontal
            data = {DATA}
            renderItem = {({item}) => {
                return renderData(item)
            }}
            keyExtractor = {item => `${item.id}`}
           
            />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    letterSpacing: 1.1,
    fontWeight: '600', 
    margin: 20, 
    paddingRight: 15, 
    color: 'white'
    
},
  price: {   
    fontSize: 25,
    fontWeight: '600',
    color: '#fff'
},
subText: {
  fontSize: 16, 
  color: 'white',
  fontWeight: '500',

}
})

export default TicketTypeCard;