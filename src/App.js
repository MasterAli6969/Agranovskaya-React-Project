import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirstPage from "./first-page-web-content/FirstPage";
import SecondPage from "./second-page-web-content/SecondPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" Component={FirstPage} />
        <Route exact path="/second" Component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default App;
