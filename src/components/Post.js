import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {
  render() {
    const { slug, id, title } = this.props.details;
    const colors = ['#95a5a6', '#bdc3c7', '#7f8c8d', '#2c3e50', '#34495e'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const divStyle = {
      background: randomColor,
    };

    return (
      <div className="post" style={divStyle}>
        <Link to={`/${id}/${slug}`}>
          <div dangerouslySetInnerHTML={{ __html: `${title.rendered}.` }} />
        </Link>
      </div>
    );
  }
}

export default Post;
