import React from 'react';
import Loader from './Loader';
import Results from './Results';
import Navigation from './Navigation';
import '../styles.css'

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			loading: true,
		}
	}

	componentWillMount() {
		this.loadPosts();
	}

	loadPosts = () => {

		const localStoragePosts = localStorage.getItem(`posts`);

		if (localStoragePosts) {
			const localPosts = JSON.parse(localStoragePosts);
			this.setState({ posts: localPosts, loading: false });
			return;
		}

		fetch(`https://wordpress.heronamedharley.com/wp-json/wp/v2/posts?per_page=20`)
		.then(data => data.json())
		.then(posts => {
			this.setState({
				posts: posts,
				loading: false
			});
			localStorage.setItem(
				`posts`,
				JSON.stringify(this.state.posts)
			);
		})
	}

	render() {
		if(this.state.loading) {
			return <Loader />
		}
		return (
			<div className="header">
				<Navigation />
				<Results posts={this.state.posts} />
			</div>
		)
	}
}

export default Main;
