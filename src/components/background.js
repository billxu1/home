import React, { Component } from 'react';
import Sky from 'react-sky';
import styled from 'styled-components'

// you can pass imported images to Sky
import rice from "../ingredients/rice.png"
import shrimp from "../ingredients/shrimp.png"
import chives from "../ingredients/chives.png"

const Background = styled.div`
    z-index: -1;
`;

class App extends Component {
  render() {
    return (
        <Background>
        <Sky 
          images={{
            /* FORMAT AS FOLLOWS */
            0: rice,
            1: shrimp,
            2: chives
            /* 3: your other image.. */
            /* 4: your other image.. */
            /* 5: your other image.. */
            /* ... */
          }}
          how={80} /* You have to pass a number so Sky will render that amount of images chosen randomly from the object you passed in the previous step */
          time={10} /* time of the animation. Dfaults at 20s */
          size={'70px'} /* size of the rendered images. Defaults at 150px */
          background={'palettedvioletred'} /* color of background. Defaults to none */
        />
        </Background>
    );
  }
}
 
export default App;
    