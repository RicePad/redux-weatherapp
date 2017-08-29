import { combineReducers } from 'redux';
import bookList from './books_reducer';
import ActiveBook from './active_book_reducer';


export default combineReducers({
    bookList,
    activeBook: ActiveBook
    
    
    
});

