import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Quotes from './Quotes';
import Header from './Header';


const App = () => {

  return (

    <div className="page__container">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/quotes" component={Quotes} />
        <Redirect to="/about" />
      </Switch>

    </div>
  );
}

export default App;
