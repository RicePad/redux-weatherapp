

// import {combineReducers} from 'redux';
// import BooksReducer from './books_reducer';
// import ActiveBookReducer from './active_book_reducer';

// export default combineReducers({
//     books: BooksReducer, 
//     activeBook: ActiveBookReducer
    
// });

import {combineReducers} from 'redux';
import books from './books_reducer';
import activeBook from './active_book_reducer';

export default combineReducers({
    books, 
    activeBook
    
});
