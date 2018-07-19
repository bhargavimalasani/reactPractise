import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
	constructor(props){

		super(props);

       this.state = {count : 1 , 
        name1 : 'Increment',
        name2 : 'Decrement'
    }

      
	} 
	render(){
        return (
        	<div>
        	 	<div>{this.state.name1}</div>
        	 	<div>{this.state.count}</div>
                <button 
        	 		value = {this.state.name1}
        	 		onClick={event => this.setState({ count : this.state.count + 1})}> {this.state.name1}</button>
        	 	<div>
        	 		<input onChange = {this.onInputChange} />
        	 	</div>
        	</div>
        	); 
	}

	onInputChange(event){
		console.log(event.target.value);
	}
}



export default SearchBar;

{name: "pizaa", cost: "5$", img: "https://cdn.britannica.com/300x500/08/177308-131-DFD947AD.jpg"}
1
:
{name: "biryani", cost: "15$", img: "https://i1.wp.com/saffronstreaks.com/wp-content/up…3/ss_jackfruitbiryani1.jpg?resize=650%2C923&ssl=1"}
2
:
{name: "chicken wings", cost: "15$", img: "http://www.publix.com/images/products/90000/091048-600x600-A.jpg"}