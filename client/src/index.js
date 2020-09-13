import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
// import serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// serviceWorker.unregister();
