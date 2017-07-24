import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.SectionStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  SectionStyle: {
    borderBottomWidth:1,
    padding:5,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection: 'row',
    borderColor:'#ddd',
    position:'relative'
  }
}

export {CardSection};
