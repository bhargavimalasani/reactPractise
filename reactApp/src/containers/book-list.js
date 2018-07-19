import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { selectBook } from '../actions/index';
import {bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

class BookList extends Component{
    renderList() {
    	return this.props.books.map((book) => {
    	return(
    		<li key={book.title} 
        onClick={() => this.props.selectBook()}
        className="list-group-item">
        {book.title}</li>
    		);
    	});
    }

    render(){
		return(
			<ul className="list-group col-sm-4">
			   {this.renderList()}
			</ul>
			)
	}
}

function mapStateToProps(state){
   return{
   	  books: state.books
   }
}

function mapDispatchToProps(dispatch){
     return bindActionCreators({ selectBook: selectBook}, dispatch,)
}


export default connect(mapStateToProps,mapDispatchToProps)(BookList);