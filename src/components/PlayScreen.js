import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

export default function PlayScreen({hidden}) {
    const [sequenceUserAnswer, setSequenceUserAnswer] = React.useState([]);
    return (
        <div className='PlayScreen' style={{display: !hidden ? 'none' : 'flex'}}>
            <Header />
            <Main sequenceUserAnswer={sequenceUserAnswer} setSequenceUserAnswer={setSequenceUserAnswer} />
            <Footer sequenceUserAnswer={sequenceUserAnswer} />
        </div>
    )
}