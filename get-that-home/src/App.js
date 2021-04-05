/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import { css } from "@emotion/react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import Find from "./pages/find";
import SignupForm from "./pages/signupForm";

function App() {
  return (
    <Router>
      <div
        css={css`

          position:relative;
          overflow: auto;
          margin: auto;
          min-height: 100vh;
          width: 100%;
          background: #F6F6F9;


        `}
      >
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/find" component={Find} />
        <Route path="/signupform" component={SignupForm} />
      </div>  
    </Router>
  );
}

export default App;