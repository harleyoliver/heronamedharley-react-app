import React from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Navigation from './Navigation';

class Single extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.loadPost(this.props.match.params.postId);
  }

  loadPost(postId) {
    fetch(`https://wordpress.heronamedharley.com/wp-json/wp/v2/posts/${postId}`)
      .then(data => data.json())
      .then(singlePost => {
        this.setState({
          post: singlePost,
          loading: false,
        });
      });
  }

  render() {
    const { post, loading } = this.state;
    const colors = ['#95a5a6', '#bdc3c7', '#7f8c8d', '#2c3e50', '#34495e'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const divStyle = {
      background: randomColor,
    };

    if (loading) {
      return <Loader message="Fetching Post" />;
    }

    return (
      <div>
        <Navigation />
        <div className="single-post container">
          <div className="desc">
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} style={divStyle} />
          </div>
          <div className="page-content">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <Link to="/">
              <i className="fas fa-angle-left" /> Back
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
