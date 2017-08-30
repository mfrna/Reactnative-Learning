import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import {Header,Spinner,Button, Card,CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn: null
    };
  }
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
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    })
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
