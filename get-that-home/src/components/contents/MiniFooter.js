/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  position: fixed;
  height: 56px;
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #F5F5F6;
  bottom: 0;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: auto;
  left: 0;
  
  

`;



const Text = styled.p`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.1px;
color: #373737;
`;

const TextDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items:center;
`;


const TextDivColumn = styled.div`
position: static;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0px;
margin-left: 25%;
`;

const TextRow = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 0px 220px;
`;

const PinkLine = styled.div`
position: absolute;
left: 0px;
right: 0px;
top: 0px;
background: #BF5F82;
height: 1px;
width: 100%;
`;


function MiniFooter (){
  return(
    <StyledDiv>
      <PinkLine/>
     
     <TextDivColumn>
       <TextRow>
     
        <TextDiv>
          
          <Text>© 2021 - Find That Home</Text>
        </TextDiv>  

        <TextDiv>
          <Text>Source Code</Text>
        </TextDiv>   

        <TextDiv> 
          <Text>Codeable - Cohort 3 Final Project</Text>
          
        </TextDiv>
        </TextRow>

        <TextRow>
        <TextDiv>
        <Text>Ruby on Rails REST API</Text>
        </TextDiv>

        <TextDiv>
        <Text>React Responsive SPA</Text>
        </TextDiv>
        </TextRow>
      </TextDivColumn>
    </StyledDiv>
  );
}

export default MiniFooter;