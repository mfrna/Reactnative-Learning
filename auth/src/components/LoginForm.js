import React, {Component} from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection,Button, TextField, Spinner } from './common';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
  }

  onButtonPress(){
    const {email, password} = this.state;
    this.setState({error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(()=> firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
      )

  }

  onLoginSuccess(){
    this.setState({
      loading: false,
      error: '',
      email: '',
      password: ''
    });
  }

  onLoginFail(){
    this.setState({
      error: 'Authentication Failed', 
      loading: false
    });
  }

  renderButton(){
    if(this.state.loading){
      return (<Spinner size="small" />);
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render(){
    return(
      <Card>
        <CardSection>
          <TextField
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            placeholder="user@email.com"
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
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
