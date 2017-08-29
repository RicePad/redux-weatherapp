import React, { Component } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail'


class App extends Component {
    
    render(){
        return(
            <div>
             <h2>Inside of App Component</h2>
             <BookList />
             <BookDetail />
            </div>
            );
        
    }
    
    
}


export default App;