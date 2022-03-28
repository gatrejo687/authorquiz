import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'

/*
function AuthorQuiz() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ummm
        </a>
      </header>
    </div>
  );
}
*/

function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown.</p>
    </div>
  </div>);
}

function Turn({authors, books}) {
  return (
    <div className="row turn" style={{backgroundColor: "white"}}>
      <div className="col-4 offset-1">
        <img src={authors.imageUrl} className="authorimage" alt="Author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <p>{title}</p>)}
      </div>
    </div>
  );
}

function Continue () {
  return (<div/>);
}

function Footer() {
  return (<div className="row">
    <div className="col-12">
      <p className="text-muted credit">All images are from <a href="#">Wikimedia Commons</a> and are in the public domain.</p>
    </div>
  </div>);
}

function AuthorQuiz({turnData}) {
    return (
      <div className="container-fluid">
        <Hero/>
        <Turn {...turnData} />
        <Continue/>
        <Footer/>
      </div>
    );
}

export default AuthorQuiz;
