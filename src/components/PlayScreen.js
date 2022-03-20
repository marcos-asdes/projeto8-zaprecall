import Header from './Header.js';
/* import Main from './Main.js'; */
/*import Footer from './Footer.js'; */

export default function PlayScreen({hidden}) {
    return (
        <div className='PlayScreen' style={{display: !hidden ? 'none' : 'flex'}}>
            <Header />
        </div>
    )
}