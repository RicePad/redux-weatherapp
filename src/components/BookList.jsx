import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions'



class BookList extends Component {
    
    renderList(){
        console.log('this.props.book', this.props.books);
        return this.props.books.map((book) => {
            return(
                 <li 
                 key={book.title} 
                 className="list-group-item"
                 onClick={() => selectBook(book)}
                 >{ book.title}</li>
                );
            
        });
        
    }
    
    render(){
        return(
            <div>
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
            </div>
            
            
            
            );
        
        
    }
    
}


function mapStateToProps(state){
return  {
    books: state.bookList,
  
    
};

    
}

export default connect(mapStateToProps, { selectBook })(BookList);