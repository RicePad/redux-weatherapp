import React, { Component } from 'react';
import BookList from './BookList';


class App extends Component {
    
    render(){
        return(
            <div>
             <h2>Inside of App Component</h2>
             <BookList />
            </div>
            )
        
    }
    
    
}


export default App;