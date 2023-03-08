import { Box } from '@mui/material';
import React, { Component } from 'react';
import Background from '../components/background';
import Card from '../components/card'

class App extends Component {
  render() {
    return (
        <Box>
            <Card />
            <Background />
        </Box>
    );
  }
}
 
export default App;
    