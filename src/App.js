import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./home";
import Create from "./create.js";
import BlogDetails from "./components/blogdetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />Í
          </Route>
          <Route exact path="/blogdetails/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
