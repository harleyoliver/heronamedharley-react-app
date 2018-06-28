import React from 'react';
import Navigation from './Navigation';

class Loader extends React.Component {
  render() {
    const colors = ['#95a5a6', '#bdc3c7', '#7f8c8d', '#2c3e50', '#34495e'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const divStyle = {
      background: randomColor,
    };

    return (
      <div>
        <Navigation />
        <div className="loader" style={divStyle}>
          <div className="fa-3x">
            <i className="fas fa-circle-notch fa-spin" />
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
