import React from 'react';
import ReactDOM from 'react-dom';

import { CurrentTrack } from './components/Spotify';
import { Wall, Brick } from './components/Wall';
import { YouTube } from './components/YouTube';
import { Image } from './components/Image';

const App = () => (
    <Wall size="5,5">
        <Brick position="a1:c2">
            <CurrentTrack />
        </Brick>
        <Brick position="d1:e2" noStyle={true} >
            <Image src="http://21six.com/wp-content/uploads/2017/08/21six-white-logo.svg" />
        </Brick>
        <Brick position="c3:e5">
            <YouTube id="Ga3maNZ0x0w" />
        </Brick>
    </Wall>
    // <Wall size="10,10">
    //    <Brick position="b2:i7" noStyle={true} >
    //         <Image src="http://21six.com/wp-content/uploads/2017/08/21six-white-logo.svg" />
    //     </Brick>
    //     <Brick position="b8:i9">
    //         <CurrentTrack />
    //     </Brick>
    // </Wall>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
