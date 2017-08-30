import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          searchInput: ''  
            
        };
    }
    
    render(){
        return(
            <div>
                <h2>Search Bar</h2>
                <input
                    onChange={(event) => {searchInput: event.target.value}}

                    placeholder="Search for forecast"
                />
                <button
                
                
                >Submit</button>
            </div>
            );
        
    }
    
    
}


export default SearchBar;