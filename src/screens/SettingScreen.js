import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import EntypoIcon from "react-native-vector-icons/Entypo";

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    
    <View style={styles.container}>
        <View style={styles.scrollArea2}>
        <ScrollView
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >

      <Card style={{borderColor: "#000", borderWidth: 2, width: '90%', height: '15%', borderRadius: 50, alignSelf: 'center'}}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
          <Image
                          source={{
                          uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQGV5gZWlI95iA/profile-displayphoto-shrink_800_800/0/1633124387846?e=2147483647&v=beta&t=FoDegw1yRnOIi07aPfan4mezzW7TLjMbFb9Zz0GPpv4'
                          }} 
                          resizeMode="contain"
                          style={{
                              width: 110,
                              height: 140,
                              alignSelf: 'center', 
                              borderRadius: 100/2
                          }}
            />
          <View style={{alignSelf: 'center', paddingLeft: 20}}>
          <Text style={{alignSelf: 'center', fontSize: 24, fontWeight: '700', paddingTop: 10}}>Pratt Shankar</Text>
          <Text style={{alignSelf: 'center', color: '#424242'}}>@pshankar77</Text>
          </View>
        </View>
      </TouchableOpacity>
      </Card>

      

        <Card style={{borderColor: "#000", borderWidth: 2, height: '44%', borderRadius: 50, alignSelf: 'center', width:'78%', marginTop: 15, }}>
        <View style={{alignSelf: 'flex-start', padding: 10}}>

          <TouchableOpacity style={{}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 15, marginTop: 0}}>
                <EntypoIcon name='credit-card' style={{fontSize:25, alignSelf: 'center'}}></EntypoIcon>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '500', padding: 15}}    >Transaction Methods</Text>
                <EntypoIcon name='chevron-thin-right' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 25}}></EntypoIcon>
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={{}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 15, marginTop: -5}}>
                <EntypoIcon name='credit' style={{fontSize:25, alignSelf: 'center'}}></EntypoIcon>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '500', padding: 15}}    >User Limits</Text>
                <EntypoIcon name='chevron-thin-right' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 106}}></EntypoIcon>
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={{}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 15, marginTop: -5}}>
                <EntypoIcon name='shopping-bag' style={{fontSize:25, alignSelf: 'center'}}></EntypoIcon>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '500', padding: 15}}    >Discounts & Promo</Text>
                <EntypoIcon name='chevron-thin-right' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 40}}></EntypoIcon>
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={{}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 15, marginTop: -5}}>
                <EntypoIcon name='fingerprint' style={{fontSize:25, alignSelf: 'center'}}></EntypoIcon>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '500', padding: 15}}    >Security & Privacy</Text>
                <EntypoIcon name='chevron-thin-right' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 45}}></EntypoIcon>
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={{}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 15, marginTop: -5}}>
                <EntypoIcon name='notification' style={{fontSize:25, alignSelf: 'center'}}></EntypoIcon>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '500', padding: 15}}    >Notifications</Text>
                <EntypoIcon name='chevron-thin-right' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 90}}></EntypoIcon>
                </View>
          </TouchableOpacity>

          <TouchableOpacity style={{}}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 15, marginTop: -5}}>
                <EntypoIcon name='help' style={{fontSize:25, alignSelf: 'center'}}></EntypoIcon>
                <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: '500', padding: 15}}    >Need Help!</Text>
                <EntypoIcon name='chevron-thin-right' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 100}}></EntypoIcon>
                </View>
          </TouchableOpacity>

        </View>
      </Card>

      <TouchableOpacity style={{width: '80%', backgroundColor: '#F70064', borderColor: "#F70064", borderWidth: 1, padding: 15, alignSelf: 'center', borderRadius: 30, marginTop: 20}}>
                <Text style={{textAlign: 'center', color: '#FFF', fontWeight: '700'}}>Register New User</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={{width: '80%', backgroundColor: '#FFF', borderColor: '#F70064', borderWidth: 1, color: "#fff", padding: 15, alignSelf: 'center', borderRadius: 30, marginTop: 20}}>
                <Text style={{textAlign: 'center', color: '#F70064', fontWeight: '700'}}>Invite Friends</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={{backgroundColor: '#000', color: "#fff", borderColor: '#424242', borderWidth: 1, padding: 10, alignSelf: 'center', borderRadius: 30, marginTop: 20, width: '80%', flexDirection: 'row'}}>
                <EntypoIcon name='log-out' style={{fontSize:15, alignSelf: 'center', opacity: 0.8, marginLeft: 100}}></EntypoIcon>
                <Text style={{textAlign: 'center', color: '#FFF', fontWeight: '700', padding: 10}}>Sign Out</Text>
      </TouchableOpacity> 

      <TouchableOpacity style={{backgroundColor: '#FFF', color: "#fff", padding: 10, justifyContent: 'space-evenly', borderRadius: 30, marginTop: 20, width: '80%', flexDirection: 'row'}}>
                <EntypoIcon name='facebook-with-circle' style={{fontSize:20, alignSelf: 'center', opacity: 0.8, marginLeft: 100}}></EntypoIcon>
                <EntypoIcon name='twitter-with-circle' style={{fontSize:20, alignSelf: 'center', opacity: 0.8, marginLeft: 100}}></EntypoIcon>
                
      </TouchableOpacity> 
      
      <View style={{margin: 20}}>
     
        <Text style={{color: '#424242', alignSelf: 'center', padding: 10, marginHorizontal: 20, textAlign: 'center'}}> Dream Canteen Pvt Ltd Privacy Policy & Terms of Service</Text>
        <Text></Text>
        <Text style={{color: '#424242', alignSelf: 'center'}}> Version 1.00.01</Text>
      
      </View>


      <Text style={{color: '#424242', alignSelf: 'center', marginTop: 10}}> Created on 20th March, 2022</Text>

      </ScrollView>
        </View> 

      </View>

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding:5,
    alignItems: 'center',
  },
  card: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollArea2: {
    width: '100%',
    height: '100%',
    
  },
  scrollArea2_contentContainerStyle: {
    height: '130%',
    width: '100%'
  },
});