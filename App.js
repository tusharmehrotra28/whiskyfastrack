import { StyleSheet, Button, Text, View, LogBox } from 'react-native';
LogBox.ignoreAllLogs();
import React, { Component } from "react";
import StackNavigator from './src/navigation/StackNavigator';




export default function App() {
  return (
    //HOC - higher order component (passes down call Auth stuff to children)
    
   <StackNavigator />
   

  );
}



