import React, { Component } from 'react'

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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({isloading: true})
    });
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
export default PostForm;