/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import Template from "../pages/template";
import MiniFooter from "../components/contents/MiniFooter";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import CardSignUp from "../components/contents/CardSignup";

const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 100%;
  height: 100vh;
  background: #FFFFFF;
`;

const PinkRectangle = styled.div`
  position: absolute;
  height: 352px;
  width: 100%;
  background: rgba(244, 143, 177, 0.15);
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 88px;
  letter-spacing: -0.5px;
  color: #1D4044;

`;

const Subtitle = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #1D4044;
  margin-top: 136px;
`;



const ListItem = styled.li`
  & > a {
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
  &.selected {
            
            filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4));
          }
  }
`;

const CardDiv = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 614px;
  height: 274px;
  top: 340px;
  position: absolute;
  gap: 54px;
`;




const sections = ["signupform"];
const cards = {
  
  signupform: <CardSignUp className="signup-card"></CardSignUp>,
  
};

export default function SignUp() {
  const location = useLocation();
  const isSelected = (section) => {
    return (
      (location.pathname === "/" && section === "home") ||
      location.pathname === `/${section}`
    );
  };

  return (

    <Template>

        <SignUpDiv>
          <PinkRectangle/>
          

            <Subtitle>Selecciona el perfil con el que te identificas</Subtitle>
            <Title>Que estas buscando?</Title>

            

            <CardDiv>

            {sections.map((section) => (
        <ListItem key={section}>
          <Link
            className={isSelected(section) ? "selected" : ""}
            to={section === "home" ? "/" : `/${section}`}
          >
            {cards[section]}
          </Link>
        </ListItem>
      ))}

          </CardDiv>
          
        
        </SignUpDiv>



      <MiniFooter></MiniFooter>

      </Template>

  );
}