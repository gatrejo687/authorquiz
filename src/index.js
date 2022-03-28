import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import reportWebVitals from './reportWebVitals';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Google',
    books: ['The Adventures of Huckleberry Finn']
  }
];

const state = {
  turnData: {
    authors: authors[0],
    books: authors[0].books
  }
};

ReactDOM.render(
  <AuthorQuiz {...state} />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
