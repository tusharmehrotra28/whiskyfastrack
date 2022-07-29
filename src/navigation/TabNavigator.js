import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import EntypoIcon from "react-native-vector-icons/Entypo";
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import SettingScreen from '../screens/SettingScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import StatusPage from '../screens/StatusPage';
import FastTrackScreen from '../screens/FastTrackScreen';
import RegularScreen from '../screens/RegularScreen';
import HomeScreen from '../screens/HomeScreen';
import CustomTabBar from '../components/CustomTabBar';



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

const CartStack = createStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator initialRouteName="Cart">
      <CartStack.Screen name="Cart" component={ShoppingCartScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Status" component={StatusPage} options={{ headerShown: false }}/>
    </CartStack.Navigator>
  );
}




// const Tab = createBottomTabNavigator();

// const screenOptions = (route, color) => {
//   let name;

//   switch (route.name) {
//     case 'Home':
//       name = 'home';
//       break;
//     case 'Settings':
//       name = 'tools';
//       break;
//     case 'Cart':
//       name = 'shopping-cart';
//       break;
//     default:
//       break;
//   }

//   return <EntypoIcon name={name} color={color} size={24} />;
// };



// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({route, navigation}) => ({
//         tabBarIcon: ({color}) => screenOptions(route, color),
//         tabBarStyle: { position: 'absolute', borderTopWidth: 0  },
//         tabBarBackground: () => (
//         <BlurView tint="dark" intensity={70} style={StyleSheet.absoluteFill} />
//     ),
//       })}
//       tabBarOptions={{
//   activeTintColor: '#F7006F',
//   inactiveTintColor: '#fff',
//   style: {
//     borderTopColor: '#000',
//     borderTopWidth: 0,
//     backgroundColor: 'transparent',
//     elevation: 5,
//   },
// }}
//  tabBar={(props) => <CustomTabBar {...props} />}
//  >
      
//       <Tab.Screen name="Settings" component={SettingScreen} options={{ headerShown: false }}/>
//       <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
//       <Tab.Screen name="Cart" component={CartStackScreen} options={{ headerShown: false }}/>
//     </Tab.Navigator>
//   );
// };


export default TabNavigator;