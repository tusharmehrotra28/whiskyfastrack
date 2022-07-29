import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OTPScreen from '../screens/OTPScreen';
import StatusPage from '../screens/StatusPage';
import { createStackNavigator } from '@react-navigation/stack';
// import useAuth from '../hooks/useAuth';
import FastTrackScreen from '.././screens/FastTrackScreen'
import HomeScreen from '../screens/HomeScreen';
import RegularScreen from '../screens/RegularScreen';
import Pay from '../screens/paymentgateway';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
      <HomeStack.Screen name="FT" component={FastTrackScreen} options={{ headerShown: false}}/>
      <HomeStack.Screen name="RT" component={RegularScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Status" component={StatusPage} options={{ headerShown: false }}/>
    </HomeStack.Navigator>
  );
}

const Stack = createNativeStackNavigator(); //functiom that gives us all capabilities

//differernt screens


const StackNavigator = () => {

  // const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home' 
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#F70054' },
        backgroundColor: "transparent"
      }}
      > 
      {/* {user ? (
        <> */}
        <Stack.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
          headerShown: false
          }}
        /> 
    
        {/* </>
        ) : (
          <>
          <Stack.Screen name="Phone" component={PhoneScreen} /> 
          <Stack.Screen name="OTP" component={OTPScreen} /> 
          </>
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator