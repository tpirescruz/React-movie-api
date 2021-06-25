import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const onSearchQuery = (inputValue) => {
    setSearchQuery(inputValue)
  }

  return (
    <>
    <Router>
      <SearchBar onBtnClick={(inputValue) =>onSearchQuery(inputValue)}/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/search' exact >
          <SearchResults searchQuery={searchQuery} />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
