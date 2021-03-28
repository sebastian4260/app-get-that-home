import styled from "@emotion/styled";
//import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import StyledFindAHomeButton from "../UI/buttons/StyledFindAHomeButton"
import StyledJoinButton from "../UI/buttons/StyledJoinButton"
import StyledLoginButton from "../UI/buttons/StyledLoginButton"


const StyledUl = styled.ul`
  position: absolute;
  height:72px;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  background: #FFFFFF;
  padding: 0px;
  margin: auto;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ListItem = styled.li`
  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
  &.selected {
            
            filter: drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.4));
          }
  }
`;


const sections = ["home", "find", "signup", "login"];
const buttons = {
  find: <StyledFindAHomeButton className="ri-find-2-line">Find a Home</StyledFindAHomeButton>,
  home: <i className="ri-home-2-line">Home</i>,
  signup: <StyledJoinButton className="ri-signup-line">Join</StyledJoinButton>,
  login: <StyledLoginButton className="ri-login-line">Login</StyledLoginButton>,
};

export default function Navbar() {
  const location = useLocation();
  const isSelected = (section) => {
    return (
      (location.pathname === "/" && section === "home") ||
      location.pathname === `/${section}`
    );
  };

  return (
    <StyledUl>
      
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
      
    </StyledUl>
  );
}