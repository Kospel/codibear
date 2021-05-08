import { render } from 'react-dom';
import React from 'react';

import App from 'common/components/app';

import './index.scss';

const root = document.getElementById('root');
const renderApp = () => render(<App />, root);

renderApp();
