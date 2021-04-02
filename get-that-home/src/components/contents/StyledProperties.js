/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropertyCard from "../contents/PropertyCard";

const StyledDiv = styled.div`
  position: absolute;
  height: 604px;
  width:100%;
  top: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: #FFFFFF;
`;

const DivTitle = styled.div`

position: static;
width: 601px;
height: 84px;
margin: 32px 0px;
`;


const Title = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 48px;
text-align: center;
letter-spacing: 0.25px;
color: #BF5F82;

`;

const SubTitle = styled.h2`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
text-align: center;
letter-spacing: 0.1px;
color: #373737;

`;


const DivProperty = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 996px;
  height: 360px;
  gap:48px;
  top: 116px;
`;



function StyledProperties (){
  return(
    <StyledDiv>
      <DivTitle>
        <SubTitle>Find an Apartment you Love</SubTitle>
        <Title>Homes for rent at the best prices</Title>
      </DivTitle>

      <DivProperty>
      
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
        <PropertyCard></PropertyCard>
      
      </DivProperty>


      
    </StyledDiv>
  );
}

export default StyledProperties;