export function selectBook(book) {
    //action creator and must return action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
    // console.log('book has been chosen', book.title);
}