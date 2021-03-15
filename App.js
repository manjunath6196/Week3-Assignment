
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen,AboutScreen } from './src/screens'
import {decode, encode} from 'base-64'

import { auth, createUserProfileDocument } from './src/firebase/config';


if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { 
        
        user ? (
          <>
          <Stack.Screen name="Home">
          {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          </>
        ) : (
        
        
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AboutScreen" component={AboutScreen} />
            <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />          
          </>

        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
