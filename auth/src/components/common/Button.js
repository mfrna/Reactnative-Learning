import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const {ButtonStyle,TextStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyle}>
      <Text style={TextStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  ButtonStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5
  },
  TextStyle:{
    alignSelf:'center',
    color:'#077aff',
    fontSize:16,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10
  }
}

export {Button};
