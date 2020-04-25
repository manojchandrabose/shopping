import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';

class App extends React.Component 
{
	render() {
		return (
			<div>
        <Header />
			</div>
		)
	}
}


ReactDOM.render(<App />,document.getElementById('root'));