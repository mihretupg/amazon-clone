import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Header from "./Header";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="./checkout">
            <Header />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="./login">
            <Header />
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Homepage</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
