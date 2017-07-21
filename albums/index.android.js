// Import a library to help build a Component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => (
  <Header />
);

// Render Component to device
AppRegistry.registerComponent('albums', ()=>App);
