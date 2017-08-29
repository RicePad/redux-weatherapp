import React, { Component } from 'react';
import { connect } from 'react-redux'

import { selectBook } from '../actions/index'






class BookList extends Component {
    
    renderList(){
        // console.log('this.props.book', this.props.books);
        return this.props.books.map((book) => {
            return(
                 <li 
                 key={book.title} 
                 className="list-group-item"
                 onClick={() => this.props.selectBook(book)}
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
        books: state.books
  
    
};

    
}



export default connect(mapStateToProps, { selectBook })(BookList);






// export default connect(mapStateToProps, mapDispatchToProps)(BookList);










// import React from 'react';
// import { connect } from 'react-redux';
// import { selectBook } from '../actions/index'
// import { bindActionCreators } from 'redux';
 
//  class BookList extends React.Component{
//     renderList(){
//       return this.props.books.map((book) => {
//           return (
//               <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
               
//               );
           
           
//       });
        
//     }
    
//     render(){
//   return (
//       <ul className="list-group col-sm-4">
//             {this.renderList()}
//       </ul>
//       );
//     }
   
// }

// function mapStateToProps(state){
//     //whatever is returned will show up as pros
//     //inside of BookList
    
//     return {
//         books: state.books
        
//     };
    
    
    
// }


// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ selectBook: selectBook}, dispatch);
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(BookList);