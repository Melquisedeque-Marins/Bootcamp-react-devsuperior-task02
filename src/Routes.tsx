import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/2" >
        <SearchBox/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;