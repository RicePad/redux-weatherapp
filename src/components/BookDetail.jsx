import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  
  render(){
      
  console.log('this.props.book', this.props.bookDetail);

      
      if(!this.props.bookDetail){
            return <div>Select a book to get started</div>;
            
        }
      return (
            <div>
                <h3>Details for:</h3>
                <div>{ this.props.bookDetail.title }</div>
            </div>
          
          );
      
  } 
    
    
    
    


}

function mapStateToProps(state){
    return {
        bookDetail: state.activeBook
        
    };
}


export default connect(mapStateToProps)(BookDetail);