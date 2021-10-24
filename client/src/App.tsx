import { Switch, Route } from "react-router-dom";
import { Appbar, Home, Edit } from "./components";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/edit" render={(props) => <Edit {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
