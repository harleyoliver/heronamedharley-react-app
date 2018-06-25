import React from 'react';
import Loader from './Loader';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

class Single extends React.Component {

	constructor() {
		super();
		this.state = {
			post: {},
			loading: true
		}
	}

	componentWillMount() {
		this.loadPost(this.props.match.params.postId);
	}

	loadPost = (postId) => {

		const localStoragePost = localStorage.getItem(`post-${postId}`);

		if (localStoragePost) {
			const localPost = JSON.parse(localStoragePost);
			this.setState({ post: localPost, loading: false });
			return;
		}

		fetch(`https://wordpress.heronamedharley.com/wp-json/wp/v2/posts/${postId}`)
			.then(data => data.json())
			.then(singlePost => {
				console.log(singlePost);
				this.setState({
					post: singlePost,
					loading: false
				});
				localStorage.setItem(
					`post-${postId}`,
					JSON.stringify(this.state.post.singlePost)
				);
			})
	}

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
		
		if(this.state.loading) {
			return <Loader message="Fetching Post" />
		}

		const { post } = this.state;

		return (
			<div>
				<Navigation />
				<div className="single-post container">
					<div className="desc">
						<h1 dangerouslySetInnerHTML={ { __html: post.title.rendered } } style={divStyle}></h1>
						<Link to={`/`}>
						<i className="fas fa-angle-left"></i> Back
					</Link>
					</div>
					<div dangerouslySetInnerHTML={ { __html: post.content.rendered } } className="page-content"></div>
				</div>
			</div>
		)
	}
}

export default Single;
