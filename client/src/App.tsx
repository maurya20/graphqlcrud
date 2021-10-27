import { Switch, Route } from "react-router-dom";
import { Appbar, Home, Edit, Detail } from "./components";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/edit" render={(props) => <Edit {...props} />} />
        <Route path="/detail/:id" render={(props) => <Detail {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
