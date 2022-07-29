import { View, Text, ImageBackground, StyleSheet, ScrollView, Button, TouchableOpacity, ImageBackgroundBase, Pressable } from 'react-native'
import React, {useState} from 'react'
import TicketCard from '../components/TicketCard';
import BookNowBar from '../components/BookNowBar';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const RegularScreen = () => {
    
  return (

<ImageBackground source={{uri: "https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/Interior-Shot-2.jpg&w=600&h=700"}} style={{width: '100%', height: '100%'}}>

<View style={styles.titleView}>
    {/* <Text style={styles.title}>Whisky Samba</Text> */}
 </View> 

<View 
style={styles.container}>

 <TicketCard 
 price={2500} 
 title="Basic Bar Access" 
 subTitle="basic bar" 
 desc="Getting access into the venue on a minimum spend basis. Enjoying food & beverages as usual.."
 desc2="Wait times vary for person to person. This access fee is redeamable but non-refundable."
 />
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

export default RegularScreen

