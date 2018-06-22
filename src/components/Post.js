import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
	render() {
		const { slug, id, title } = this.props.details;

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
			<div className="post" style={divStyle} tabIndex="0">
				<Link to={`/${id}/${slug}`}>
					<div dangerouslySetInnerHTML={ { __html: title.rendered + '.' } }></div>
				</Link>
			</div>
		)
	}
}

export default Post;
