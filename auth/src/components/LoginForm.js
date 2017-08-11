import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import {Card, CardSection,Button, TextField} from './common';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  onButtonPress(){
    const {email, password} = this.state;
    this.setState({error: ''});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(()=> firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => this.setState({error: 'Authentication Failed'}))
      )

  }

  render(){
    return(
      <Card>
        <CardSection>
          <TextField
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder="user@mail.com"
          />
        </CardSection>

        <CardSection>
          <TextField
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder="password"
            secureTextEntry
          />
        </CardSection>

        <Text style={{fontSize:22, alignSelf: 'center', color: '#f11'}}>{this.state.error}</Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
