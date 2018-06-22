import React from 'react';

class Loader extends React.Component {

	render() {

		var colors = [
			'#95a5a6',
			'#bdc3c7',
			'#7f8c8d',
			'#2c3e50',
			'#34495e',
		];
	
		var random_color = colors[Math.floor(Math.random() * colors.length)];
	
		var divStyle = {
			background: random_color,
		};

		return (
			<div className="loader" style={divStyle}>
				<div className="fa-3x">
					<i className="fas fa-circle-notch fa-spin"></i>
				</div>
			</div>
		)
	}
}

export default Loader;
