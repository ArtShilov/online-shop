import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/";
import { Home, Cart, PageNotFound } from "./pages";
import "./scss/app.scss";
import { setInitialStateToCart } from "./redux/actions/cart";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart !== null) {
      dispatch(setInitialStateToCart(cart));
    }
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
