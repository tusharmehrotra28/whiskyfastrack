import { View, Text, ImageBackground, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Card } from 'react-native-paper';
import TicketTypeCard from '../components/TicketTypeCard';
import { useNavigation } from '@react-navigation/native';
import AutoScroll from "@homielab/react-native-auto-scroll";
import BookNowBar from '../components/BookNowBar';
import Pay from '../screens/paymentgateway';


const HomeScreen = (props) => {
  const navigation = useNavigation();

  const welcomeMsg = useState(["DJ Snake playing @11pm Whisky Samba Exclusive"])

    const onPressFast = () => {
      // Linking.openURL('https://rzp.io/l/uYQ7tXPvNA'); 
        navigation.navigate('FT')
      }

    const onPressRegular = () => {
        // Linking.openURL('https://rzp.io/l/uYQ7tXPvNA'); 
          navigation.navigate('RT')
        }
  
  return (
    <View style={styles.container}> 
        
      <View style={{alignItems: 'flex-end', padding: 40, marginTop: 30}}>
        <Text style={styles.text}>Hello</Text>
        <Text style={{fontSize: 30, color: "#fff", fontWeight: '500'}}>Pratt Shankar</Text>
      </View>

    {/* Active boarding passes and expired transactions */}

        <AutoScroll>
          <Text style={{color: 'white' ,backgroundColor: '#000'}}>{welcomeMsg}</Text>
        </AutoScroll>

      <View style={{height: '70%', width: '100%', marginTop: 30}}>
        <Text style={styles.heading}>Live Updates</Text>


        <Card style={{height: '21%', width: '90%', alignSelf: 'center', borderRadius: 30, marginTop: 20, backgroundColor: "#f70054"}}>

          <Image source={{uri: "https://www.tinydecozone.com/wp-content/uploads/2022/05/Barcode-Transparent-PNG.png"}} style={{height: '90%', width: '90%', alignSelf: 'center', marginTop: 10}}/>

        </Card>

        
        <View style={{marginTop: 30}}>
        <Text style={styles.heading}>Today's Offers</Text>
        </View>

      

        <ScrollView contentContainerStyle={{flex: 1, flexDirection: "row", flexWrap: "wrap", width: '150%'}} horizontal>
        <View style={{flexDirection: 'row', width: '90%'}}>
        <TicketTypeCard title="VIP Track" price="4000" wait="2" icon="rocket" onPress={onPressFast} image="https://res.cloudinary.com/purnesh/image/upload/f_auto/v1490607630/header848.jpg"/>
        <TicketTypeCard title="Basic Bar" price="2500" wait="30" icon="bolt" onPress={onPressRegular} image="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/Interior-Shot-2.jpg&w=600&h=700"/>
        </View>
        </ScrollView>

        

        
        
        
        
      </View>
      

    {/* offers at WS but later restaurants */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#000", 
  },

  text: {
      fontSize: 20,
      textAlign: 'center',
      color: "#fff"
  }, 
  heading: {
      fontSize: 30,
      textAlign: 'left',
      marginLeft: 20, 
      fontWeight: '500',
      color: 'white'
  },
  

})

export default HomeScreen