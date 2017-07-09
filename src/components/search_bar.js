import React from 'react';


// Normal functional component
// const SearchBar = () => {
//     return <input />;
    
// };


 


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { term: ''};
   
    }
     
    
    render() {
        return <div className="search-bar">
                <input
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)} /> 
               </div>;
        //   return   <input onChange={(event) => this.setState({ term: event.target.value })} /> value of input: {this.state.term}
        // Original version:  <input onChange={this.onInputChange} /> value of the Input: {this.state.term} 

    }
    
  
     onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
}


export default SearchBar;