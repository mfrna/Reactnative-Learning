import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumDetail extends Component{
  render(){
    return (
      <View>
        <Text>{this.props.album.title}</Text>
      </View>
    );
  }
}

export default AlbumDetail;
