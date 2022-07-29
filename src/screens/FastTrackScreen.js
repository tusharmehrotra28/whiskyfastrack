import { View, Text, ImageBackground, StyleSheet, ScrollView, Button, TouchableOpacity, ImageBackgroundBase, Pressable } from 'react-native'
import React, {useState} from 'react'
import TicketCard from '../components/TicketCard';
import BookNowBar from '../components/BookNowBar';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const FastTrackScreen = () => {
    
  return (

<ImageBackground source={{uri: "https://img.etimg.com/thumb/width-640,height-480,imgsize-170486,resizemode-1,msid-58906941/magazines/panache/agood-restaurant-visit-is-a-60-minute-holiday-that-should-satiate-the-soul-saysfoodpreneur-ashish-dev-kapur/whiskysamba.jpg"}} style={{width: '100%', height: '100%'}}>

<View style={styles.titleView}>
    {/* <Text style={styles.title}>Whisky Samba</Text> */}
 </View> 

<View 
style={styles.container}>

 <TicketCard 
 price={4000} 
 title="VIP Fast Track Access" 
 subTitle="fast-track™" 
 desc="Getting instant access into the venue, seating at a popular/exclusive table at 0 wait time. Complimentary drinks, bartender, and a wholesome experience"
 perks=""
 desc2="Non Refundable."/>
 </View>

 <BookNowBar />

 </ImageBackground> 

 
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
    },
   
    title: {
        fontSize: 30,
        color: "#fff",
        letterSpacing: 1.5,
        textAlign: 'center',
        fontWeight: '900',
    }, 
   

})

export default FastTrackScreen

