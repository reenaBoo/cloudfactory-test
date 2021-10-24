import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About/About';
import Quotes from './Quotes/Quotes';
import Header from './Header/Header';
import { PageContainer } from './App.styles';

const App = () => {

  return (
    <PageContainer>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/quotes" component={Quotes} />
        <Redirect to="/about" />
      </Switch>
    </PageContainer>
  );
}

export default App;
