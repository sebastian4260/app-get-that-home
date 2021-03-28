/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Navbar from "../components/contents/Navbar"
import { css } from "@emotion/react";

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar{
      display: none;
    }
`;

function Template({ children }) {
  return (
    <StyledPage>
      <Navbar/>
      <Content>{children}</Content>
    </StyledPage>
  );
}

export default Template;