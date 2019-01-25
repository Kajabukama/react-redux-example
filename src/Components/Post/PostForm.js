import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createPost } from '../../actions/PostActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    isloading: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = eve => {

    eve.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post);
    
  }


  render() {
    return (
      <div>
        <h4 className="mb-5">Post Form</h4>
        <form className="form" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input 
              type="text" 
              name="title" 
              className="form-control" 
              placeholder="Post Title" 
              value={ this.state.title } 
              onChange={ this.handleChange }/>
          </div>
          <div className="form-group">
            <textarea 
              name="body" 
              placeholder="Your Post ..." 
              className="form-control"
              value={ this.state.body } 
              onChange={ this.handleChange }></textarea>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary bg-purple btn-block btn-lg" value="Submit Post"/>
          </div>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}
export default connect( null, { createPost }) (PostForm);