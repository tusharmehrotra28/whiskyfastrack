import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, {useState} from 'react'

const QuantitySelector = () => {
   
    const [quantity, setQuantity] = useState(quantity);

    const onMinus = () => {
        setQuantity(Math.max(0, quantity - 1));
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }


  return (
    <View style={styles.root}>
        

        <Pressable onPress={onMinus} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Text style={styles.quantity}>{quantity}</Text>

        <Pressable onPress={onPlus} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

    root: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-between',
    },
    button: {
        width: '50%', 
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#000", 
        borderRadius: 30, 
    },
    buttonText: {
        fontSize: 30,
        color: "#fff"
    },
    quantity: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5.
    }
});

export default QuantitySelector;