import React from 'react';
import {TextInput, Text, View} from 'react-native';

const TextField = ({label, value, onChangeText, placeholder, secureTextEntry})=>{
  const {ContainerStyle,LabelStyle,InputStyle} = Styles;
  return (
    <View style={ContainerStyle}>
      <Text style={LabelStyle}>{label}</Text>
      <TextInput
        style={InputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const Styles = {
  ContainerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  LabelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  InputStyle: {
    flex: 2,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23
  }
};

export {TextField};
