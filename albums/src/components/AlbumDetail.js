import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component{
  render(){
    const {title,artist,thumbnail_image,image,url} = this.props.album;
    const {
      CardTextStyle,
      CardImageStyle,
      AlbumImageStyle,
      CardTitleStyle,
      CardImageViewStyle
    } = styles;
    return (
      <Card>
        <CardSection>
          <View style={CardImageViewStyle}>
            <Image
              source={{uri: thumbnail_image}}
              style={CardImageStyle}
            />
          </View>
          <View style={CardTextStyle}>
            <Text style={CardTitleStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={AlbumImageStyle}
            source={{uri: image}}
          />
        </CardSection>
        <CardSection>
          <Button onPress={()=>Linking.openURL(url)}>
            Find on Amazon
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  CardTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  CardTitleStyle:{
    fontSize: 18
  },
  CardImageStyle: {
    width: 50,
    height: 50
  },
  CardImageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  AlbumImageStyle: {
    height:300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
