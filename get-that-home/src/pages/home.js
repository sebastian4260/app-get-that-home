/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import PropertyCard from "../components/contents/PropertyCard"
import StyledLoginButton from "../components/UI/buttons/StyledLoginButton"

function Home (){
  

  return(
    
          <div>
            <PropertyCard />

          <StyledLoginButton>Login</StyledLoginButton>
          </div>
          )
  };
       

export default Home;