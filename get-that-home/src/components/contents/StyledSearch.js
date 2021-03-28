/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StyledLoginButton from "../UI/buttons/StyledLoginButton";

const StyledDiv = styled.div`
  position:absolute;
  height:600px;
  background-image: url(https://res.cloudinary.com/diqfeqkdb/image/upload/v1616917221/Group_jbtqpb.png);
`;

const DivTitle = styled.div`

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
position: absolute;
width: 679px;
height: 128px;
`;


const Title = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 64px;
line-height: 88px;
text-align: center;
letter-spacing: -0.5px;
color: #373737;

`;

const SubTitle = styled.h2`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
text-align: center;
color: #616161;

`;


const DivSearch = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  position: absolute;
  width: 800px;
  height: 72px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;



const Inputdiv = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #FFFFFF;

p{
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #616161;
}

input{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
}

`;


function StyledSearch (){
  return(
    <StyledDiv>
      <DivTitle>
        <Title>Meet your new Home</Title>
        <SubTitle>The easiest way to find where you belong</SubTitle>
      </DivTitle>

      <DivSearch>
      
        <Inputdiv>I’m Looking for</Inputdiv>
        <Inputdiv>I want To</Inputdiv>
        <Inputdiv>Where</Inputdiv>
        <StyledLoginButton>Search</StyledLoginButton>
      
      </DivSearch>


      
    </StyledDiv>
  );
}

export default StyledSearch;