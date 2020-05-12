import React from 'react';
import  { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/"  component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
  );
}
export default App;
