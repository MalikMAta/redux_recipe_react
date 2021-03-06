import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Create from "./components/recipe/Create";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main/Main";
import SignIn from './components/authLinks/SignIn'
import RecipeDetails from './components/recipe/RecipeDetails'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/create" component={Create} />
            <Route path="/recipe/:id" component={RecipeDetails} />
      
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
