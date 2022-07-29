import { View, Text, ImageBackground, Pressable, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Card } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import BookNowBar from './BookNowBar';

const TicketCard = (props) => {
    const [total, setTotal] = useState(props.price)
    const [surge, setSurge] = useState(props.price);
    const [quantity, setQuantity] = useState(1);

    const onPressPlus = () => {
        setQuantity(quantity + 1);
        setTotal(total + props.price)
    }

    const onPressMinus = () => {
        setQuantity(Math.max(1, quantity - 1));
        setTotal(Math.max(props.price, total - props.price))
     }

    return (


<View style={{height: '100%'}}>
 <ScrollView 
 style={styles.cardContainer} 
 horizontal={false}
showsVerticalScrollIndicator={false}
>

        <Card style={{backgroundColor: "#fff", width: '100%', height: '130%', borderRadius: 60, alignSelf: 'center'}}>
            
            <View style={styles.cardView}>

            <Text style={styles.titleCard}> {props.title} </Text>

            <View style={{flexDirection: "row", paddingTop: '2%'}}>
            { /* <Icon name="rocket" size={25} color="#000"/> */}
            <Text style={styles.subTitleCard}> Whisky Samba, DLF </Text>
            </View>
            
            <TouchableOpacity>
            <Card style={{backgroundColor: "#fff", width: '100%', height: 55, borderRadius: 60, marginTop: '5%', borderWidth: 1, borderColor: '#000'}}>
                <View style={{flexDirection: "row", alignItems: "center", padding: 10, marginLeft: 10}}>
                    <Text style={{color: '#000', fontSize: 16, paddingRight: '2%'}}>Access Price (1 Person)</Text>
                    <Text style={{color: '#000', fontSize: 30, fontWeight: '700'}}>₹{surge}</Text> 
                </View>
            </Card>
            </TouchableOpacity>

            
            <Card style={{backgroundColor: "#F70054", width: '100%', height: 60, borderRadius: 60, marginTop: '5%'}}>
                <View style={{flexDirection: "row", alignItems: "center", padding: 3, marginLeft: 20}}>
                    <Text style={{color: '#fff', fontSize: 16, paddingRight: '17%'}}>Buy Admission</Text>
                   
                    <View style={styles.quantitySelector}>
                    <Pressable onPress={onPressMinus} style={styles.quantityButton}>
                        <Text style={styles.quantityText}>-</Text>
                    </Pressable>

                    <Text style={styles.quantityAmountText}>{quantity}</Text>

                    <Pressable onPress={onPressPlus} style={styles.quantityButton}>
                        <Text style={styles.quantityText}>+</Text>
                    </Pressable>
                     </View>


                </View> 
            </Card >
            
            
            
            <View style={{marginTop: 15, marginLeft: '2%', mareginBottom: '3%'}}>
            <Text style={styles.headingCard}>What is {props.subTitle} about?</Text>
            <Text style={styles.text}>{props.desc}</Text>


        
            {/* <Text style={styles.headingCard}>Access perks?</Text>
            <Text style={styles.text}>This ticket is redeemable for F&B inside the venue</Text>
           */}

            <Text style={styles.headingCard}>Terms</Text>
            <Text style={styles.text}>{props.desc2}</Text>
            </View>

    
            </View>
        
        </Card>
    
 </ScrollView>
        <BookNowBar total={total}/>
 </View>
        
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: "10%",
        paddingTop: '65%',
        backgroundColor: "transparent",
        width: "100%",
        height: "120%",
    },
    cardView: {
        padding: '10%'
    },
    titleCard: {
        fontSize: 30,
        color: "#000",
        textAlign: 'left',
        fontWeight: '700',
        
    }, 
    subTitleCard: {
        fontSize: 16,
        color: "#000",
        fontWeight: '300',
        marginTop:'1%',
        letterSpacing: 1.5,
        
    }, 
    quantitySelector: {
        width: 100, 
        height: 55,
        backgroundColor: "#F70054",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    quantityButton: {
        height: 50,
        backgroundColor: '#f70054',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    quantityText: {
        color: "white",
        fontSize: 24,
    },
    quantityAmountText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
    },
    headingCard: {
        fontSize: 20,
        color: "#000",
        textAlign: 'left',
        fontWeight: '700',
        marginTop: '5%',
        marginBottom: '2%'
    }, 
    text: {
        fontSize: 16,
        color: "#000",
        fontWeight: '200',
    },
    containerBN: {    
        flexDirection: 'row',
        padding: '10%',
        width: '100%',
        justifyContent: 'space-between',
        // backgroundColor: '#f5f5f5'
        backgroundColor: 'transparent',
        paddingTop: 10
    },
    titleBN: {
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
    buttonBN: {   
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

export default TicketCard;

