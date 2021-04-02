/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MiniFooter from "../components/contents/MiniFooter";
import StyledLoginButton from "../components/UI/buttons/StyledLoginButton";
import LoginForm from "../features/session/LoginForm";
import Template from "../pages/template";
import styled from "@emotion/styled";

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 388px;
  height: 256px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  top: 96px;
  left: 38%;
`;

export default function Login() {
  


  return (

    <div
    css={css`

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: rgba(97, 97, 97, 0.25);


    `}
  >
    
    
      <Template>

        <LoginDiv>
          <h2>Login</h2>
              <LoginForm id="login-form" />
            
            <StyledLoginButton type="submit" form="login-form">
              Login
            </StyledLoginButton>


        </LoginDiv>

      <MiniFooter></MiniFooter>
      </Template>
      </div>
  );
}