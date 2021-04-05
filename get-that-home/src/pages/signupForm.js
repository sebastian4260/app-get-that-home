/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MiniFooter from "../components/contents/MiniFooter";
import StyledLoginButton from "../components/UI/buttons/StyledLoginButton";
import SignUpForm from "../features/session/SignUpForm";
import Template from "./template";
import styled from "@emotion/styled";

const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  position: absolute;
  width: 388px;
  height: 468px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  top: 96px;
  left: 37.5%;
`;

export default function signupForm() {


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

        <SignUpDiv>
          <h2>Create your account</h2>
              <SignUpForm id="signup-form" />
            
            <StyledLoginButton type="submit" form="signup-form">
              Create Account
            </StyledLoginButton>


        </SignUpDiv>

      <MiniFooter></MiniFooter>
      </Template>
      </div>
  );
}