import React,{Component} from 'react';
import {connect } from 'react-redux';
import {fetchPosts} from '../actions/index';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsIndex extends Component{
	componentWillMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		return this.props.posts.map((posts)=>{
			return (
					<li className="list-group-item" key={posts.id}>
							<Link to={"posts/"+posts.id}>
							<span className='pull-xs-right'>{posts.categories}</span>
							<strong>{posts.title}</strong>
								</Link>
					</li>
				);
		});
	}
	render(){
		return (
			<div>
			<div className="text-xs-right">
					<Link to="/posts/new" className='btn btn-primary'>
						Add to post
					</Link>
			</div>
			<h3> Posts	</h3>
			<ul className='list-group'>
				{this.renderPosts()}
			</ul>

			</div>

			);
	}
}

function mapStateToProps(state){
	return {posts:state.posts.all};
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex);