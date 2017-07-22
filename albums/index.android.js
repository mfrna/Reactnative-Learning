// Import a library to help build a Component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View>
    <Header headerText={"Albums"}/>
    <AlbumList />
  </View>
);

// Render Component to device
AppRegistry.registerComponent('albums', ()=>App);
