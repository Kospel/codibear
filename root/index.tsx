import { render } from 'react-dom';

import App from 'app/index';

import './index.scss';

const renderApp = () => render(<App />, document.getElementById('root'));

renderApp();
