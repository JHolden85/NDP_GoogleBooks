import React from "React";
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
// Was 'Header'
import Header from './components/Header'
// Was 'Banner'
import Banner from './components/Banner'
// Was 'Search'
import Search from './components/Search'
// was 'Results'
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <div className="bg-gray-200 h-full min-h-screen p-4">
        <Header/>
        <Banner/>
        <Route path="/search" path="/">
          <Search/>
          <Results/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
