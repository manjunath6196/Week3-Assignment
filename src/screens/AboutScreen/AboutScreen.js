import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function AboutScreen() {

    return(   
        <Text styles={styles.footerLink}>Welcome To About Screen<br></br>
        Features: <br></br>
        1.Navigation <br></br>
        2.Easy to Go One Page To Another package<br></br>
         Usages:<br></br>
          1.............. 
           2..........
           </Text>   
    );
}

const styles=StyleSheet.create({

  footerLink: {
    color:"#788eec",
    fontWeight:"bold",
    fontSize: 16
  }
})