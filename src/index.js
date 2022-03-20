import ReactDOM from 'react-dom';
import App from './components/App';

const app = App();
const local = document.querySelector(".root");

ReactDOM.render(app, local);