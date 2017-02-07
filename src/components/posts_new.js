import React, { Component} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {createPost} from  '../actions/index';

class PostsNew extends Component{

	render(){
		const{fields:{title,categories,content},handleSubmit}=this.props;
		
		return(
			
				<form onSubmit={handleSubmit(this.props.createPost)}>
					<h3>Create a new Post</h3>
					<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
						<label>Title</label>
						<input type='text' className='form-control' {...title} />
							<div className='text-help'>
							{title.touched ? title.error:''}
							</div>
					</div>

					<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
						<label>Category</label>
						
						<input type='text' className='form-control' {...categories} />
						<div className='text-help'>
							{categories.touched ? categories.error:''}
							</div>
					
					</div>

					<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
						<label>Content</label>
						<textarea className='form-control' {...content} />
						<div className='text-help'>
							{content.touched ? content.error:''}
							</div>
					
					</div>

					<button type="submit" className="btn btn-primary"> Submit </button>
					<Link to='/' className="btn btn-danger">Cancel</Link>
				</form>
			);
	}
}

function validate(values){
	const errors={};

	if(!values.title){
		errors.title='eter a username';
	}

	if(!values.categories){
		errors.categories='enter categories';

	}
	if(!values.content){
		errors.content='enter content';
	}
	return errors;
}
//coonect:first argument is mapstate to progs 2nd is mapdispatch to props
//redux form 1st is form config, 2nd is mapstate to props 3rd is map dispatch to props

export default reduxForm({
	form:'PostsNew',
	fields:['title','categories','content'],validate
},null,{createPost})(PostsNew);