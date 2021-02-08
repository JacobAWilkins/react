import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Technology from './Views/Technology';
import Politics from './Views/Politics';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const API_KEY = '&apiKey=1dad88788ed3429592a836fd125189ed';
  let NEWS_URL = 'http://newsapi.org/v2/top-headlines?country=us';

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Headlines
              API_KEY={API_KEY}
              NEWS_URL={NEWS_URL}
            />
          </Route>
          <Route exact path="/sports">
            <Sports
              API_KEY={API_KEY}
              NEWS_URL={NEWS_URL}
            />
          </Route>
          <Route exact path="/technology">
            <Technology
              API_KEY={API_KEY}
              NEWS_URL={NEWS_URL} 
            />
          </Route>
          <Route exact path="/politics">
            <Politics
              API_KEY={API_KEY}
              NEWS_URL={NEWS_URL}
            />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
