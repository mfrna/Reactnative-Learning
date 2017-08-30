import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Spinner = ({size}) => {
  return (
    <View style={Styles.SpinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
}

const Styles = {
  SpinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
export { Spinner };
