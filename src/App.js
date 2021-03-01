import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './views/homepage';
import About from './views/about';
import Contact from './views/contact';
import Login from './views/login';
import Registration from './views/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
