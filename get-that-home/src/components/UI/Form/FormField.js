import { css } from "@emotion/react";
import styled from "@emotion/styled";

export default function FormField({ isFile, children }) {
  return <StyledDiv isFile={isFile}>{children}</StyledDiv>;
}

const withIcon = css`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
  }
`;

const StyledDiv = styled.div`
  width: 314px;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #373737;
    ${(props) => (props.isFile ? withIcon : null)};
  }
  input {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #8E8E8E;;
    border: 1px solid #F48FB1;
    border-radius: 8px;
    box-sizing: border-box;

  
    
    &[type="file"] {
      display: ${(props) => (props.isFile ? "none" : "initial")};
    }
    &:focus {
      outline: none;
    }
  }
  p {
    color: #000000;;
    text-align: center;
  }
`;