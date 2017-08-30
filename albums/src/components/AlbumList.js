import React, {Component} from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  constructor(props){
    super(props);
    this.state = {
      albums: []
    };
  }
  componentWillMount(){
    // console.log('componentWillMount in AlbumList!!');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {this.setState({albums: response.data})});
  }

  renderAlbums(){
    return this.state.albums.map((album,key) => {
      return (<AlbumDetail key={key} album={album} />);
    });
  }

  render(){
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
