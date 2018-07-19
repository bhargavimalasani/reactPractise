import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class DashBoard extends React.Component{

	constructor(props) {
    super(props);

    this.state = {
            posts: []
        };
  }

  componentDidMount() {
        axios.get('http://demo4478831.mockable.io/menu')
            .then(res => {
                const posts = res.data;
               this.setState({posts});
               console.log(posts);
               
            });
    }

	render(){
		return(
           <div className="menu-items">
            <div className="searchBar">
                <input className = "form-control" placeholder = "search" type = "text"
                value = {this.state.cusine} onChange = {this.onCusinechange} style={{width: 400}}/>      
            </div>

            {this.state.posts.map((post,index) => 
                <ul className="menu-items">
                    <div  className="imageGallery">
                       <li key={post.image}>
                       <img className="itemImage" src={post.img} />
                       </li>   
                    </div>
                    <div className="item-details">
                      <li key={post.name}>
                       <b>Cusine:</b>{post.name}
                       </li> 
                       <li key="index">
                       <b>cost:</b>{post.cost}
                       </li> 
                    </div>
                </ul>
            )}
            </div>
		);
	}
}

export default DashBoard;