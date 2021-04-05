/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StyledLoginButton from "../UI/buttons/StyledLoginButton";
import { Link, useLocation } from "react-router-dom";

const StyledDiv = styled.div`
  position: absolute;
  height: 312px;
  width:100%;
  top: 1276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  background: rgba(244, 143, 177, 0.15);
  
`;

const DivTitle = styled.div`
  position: static;
  padding: 0px;
  width: 823px;
  height: 184px;
  top: 64px;
  margin: 0px 10px;

`;

const Title = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 48px;
text-align: center;
letter-spacing: 0.25px;
color: #373737;

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

const sections = ["signup"];
const buttons = {
  
  signup: <StyledLoginButton className="ri-signup-line">Create an account now</StyledLoginButton>,
  
};

export default function StyledCreateAccountSection() {
  const location = useLocation();
  const isSelected = (section) => {
    return (
      (location.pathname === "/" && section === "home") ||
      location.pathname === `/${section}`
    );
  };


  return (


    <StyledDiv>

      <DivTitle>  
        <Title>Getting someone to rent your apartment has never been this easy</Title>

        {sections.map((section) => (
        <ListItem key={section}>
          <Link
            className={isSelected(section) ? "selected" : ""}
            to={section === "home" ? "/" : `/${section}`}
          >
            {buttons[section]}
          </Link>
        </ListItem>
      ))}
        
      </DivTitle>
      
      
      </StyledDiv>

  );
}

