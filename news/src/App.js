import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

export default function App() {

  const [news, setNews] = useState([]);

  const NEWS_URL = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=1dad88788ed3429592a836fd125189ed';
  const req = new Request(NEWS_URL);
  
  useEffect(() => {    
    fetch(req)
      .then(raw => raw.json())
      .then(res => setNews(res.results));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Switch>
          <br/>
          <Route exact path="/">
            <Headlines/>
          </Route>
          <Route exact path="/">
            <Sports/>
          </Route>
          <Route exact path="/">
            <Weather/>
          </Route>
          <Route exact path="/">
            <Politics/>
          </Route>
        </Switch>
      </header>
      <Footer/>
    </div>
  );
}
