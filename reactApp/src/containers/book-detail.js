import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
   render(){
   	  return(
   	  	   <div>{this.props.book.title}</div>
   	  	);
   }
}

function mapStateToProps(state){
   return{
   	  book : state.activeBook
   }
}

export default connect(mapStateToProps)(BookDetail)