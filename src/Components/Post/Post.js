import React, { Component } from 'react'

class Posts extends Component {
	state = {
    posts: [],
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      this.setState({posts: data})
    })
  }
	render() {

		const PostItem = this.state.posts.map((item,index) => {
      return (
        <div key={ item.id } className="col-md-4">
					<div className="card">
						<img src={ thumb } className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">{ item.title }</h5>
							<p className="card-text">{ item.body}</p>
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

export default Posts;
const thumb = require('./../../assets/imgs/thumb.jpg');