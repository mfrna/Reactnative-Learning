import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header} from './components/common';
import firebase from 'firebase';

class App extends Component{
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyBjYIYV7hIFPCUXrtceZX4N7wRTQUNYTWA",
      authDomain: "auth-2563a.firebaseapp.com",
      databaseURL: "https://auth-2563a.firebaseio.com",
      projectId: "auth-2563a",
      storageBucket: "auth-2563a.appspot.com",
      messagingSenderId: "1040088709066"
    };
    firebase.initializeApp(config);
  }
  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>App!</Text>
      </View>
    );
  }
}

export default App;
