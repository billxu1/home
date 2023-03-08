import { Box } from '@mui/material';
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
        <Box sx={{ position: 'absolute', bottom:'0', right:'0'}}>
            <img src="https://t3.ftcdn.net/jpg/03/44/05/76/360_F_344057615_YwLZhPE7LtXATY422XdWETVCH2oEyBoM.jpg" alt='Yep' width={200} height={200}></img>
        </Box>
    );
  }
}
 
export default App;
    