import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/PostActions'

class Posts extends Component {

	componentDidMount(){
		this.props.fetchPost()
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.newPost){
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {

		const PostItem = this.props.posts.map((item,index) => {
      return (
        <div key={ index } className="col-md-3 mb-3">
					<div className="card">
						<img src={ thumb } className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title text-truncate">{ item.title }</h5>
							<p className="card-text text-truncate">{ item.body}</p>
						</div>
					</div>
				</div>
      )
		})
		
		return (
			<div className="row">
				{ PostItem }
			</div>
		)
	}
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
	fetchPost: PropTypes.func.isRequired,
	newPost: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	posts: state.posts.posts,
	newPost: state.posts.post
})

export default connect(mapStateToProps, { fetchPost })(Posts);
const thumb = require('./../../assets/imgs/thumb.jpg');