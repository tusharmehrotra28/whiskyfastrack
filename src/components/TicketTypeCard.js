import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList} from 'react-native'
import React, {useState} from 'react'
import { Card } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/FontAwesome';







const TicketTypeCard = (props) => {
  

  return (
               

    <View style={{height: '89%', width: '70%', marginLeft: 20}}>
       <Card style={{backgroundColor: "#fff", width: '90%', height: '95%', borderRadius: 50, marginTop: '5%'}}>
        <TouchableOpacity onPress={props.onPress}>
          <ImageBackground source={{uri: props.image}} style={{width: '100%', height: '100%', overflow: 'hidden', borderRadius: 50}}>

          
                <View style={{width: '80%', alignItems: "center", flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                    <Text style={styles.heading}>{props.title} Access</Text>
                    {/* <Icon name={props.icon} size={50} color='#fff'/> */}
                </View>

                <View style={{justifyContent: 'center', marginTop: '27%', alignItems: 'center', marginBottom: 10}}>
                <Text style={styles.subText}>{props.wait} min waitline</Text>
                </View>

                <View style={{backgroundColor: '#F70054', width: '100%', marginTop: 12, height: '22%', alignItems: 'center', justifyContent: 'center', borderBottomRightRadius: 60, borderBottomLeftRadius: 60}}>
                  <Text style={styles.price}>Rs. {props.price}</Text>
                </View>

          </ImageBackground>
          </ TouchableOpacity>  
        </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    letterSpacing: 1.1,
    fontWeight: '700', 
    margin: 10, 
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

export default TicketTypeCard