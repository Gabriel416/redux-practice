import { combineReducers } from 'redux';
import BooksReducer from './reducers_books.js';
import ActiveBook from './reducers_active_book.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
