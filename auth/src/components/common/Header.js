import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  let {textStyle,viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height:1},
    shadowOpacity:0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize:20
  }
};

export {Header};
