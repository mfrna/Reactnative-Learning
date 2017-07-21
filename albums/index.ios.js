// Import a library to help build a Component
import React from 'react';
import {Text ,AppRegistry} from 'react-native';

// Create a Component
const App = () => (
  <Text>Hello Mobile</Text>
);

// Render Component to device
AppRegistry.registerComponent('albums', ()=>App);
