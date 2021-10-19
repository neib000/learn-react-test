// import AlbumFeature from "./features/Album";
import Header from 'components/Header';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todo" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
