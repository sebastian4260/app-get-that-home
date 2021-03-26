/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 300px;
  height: 360px;
  padding: 0px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const CardImage = styled.img`
  position: static;
  top: 0px;
  width: 300px;
  height: 200px;
`
const ImgDiv = styled.div`
  height: 200px;
`;


const CardPrice = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #373737;
  margin: 0px 8px;
 
`
const CardDirection = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin: 8px 8px;

`
;

const CardItem = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  margin: 0px 4px;
`
const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap:18px;
  justify-content: space-around;

`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  width: 300px;
  height: 160px;
  padding: 0px;
`;



function PropertyCard ({price, img_url, type, direction, bedroom, bathroom, area, pet }){
  return(
    <StyledCard>
      <ImgDiv>
        <CardImage src={img_url}/>
      </ImgDiv>
      <CardDescription>
      <ItemDiv>  
      <CardPrice>
        ${price ? (parseInt(price)):"3000"}
      </CardPrice>
      <CardItem>
        {type ? type:"Apartment"}
      </CardItem>
      </ItemDiv>
      <CardDirection>
        {direction ? direction:"86872 Jacob Gateway, Durganport, WV 48044"}
      </CardDirection>

      <ItemDiv>
        <CardItem>
        {bedroom ? bedroom:"4"}
        </CardItem>  
        <CardItem>
        {bathroom ? bathroom:"2"}
        </CardItem>
        <CardItem>
        {area ? area:"180 m2"}
        </CardItem>
        <CardItem>
        {pet ? pet:"yes"}
        </CardItem>
      </ItemDiv>
      </CardDescription>
    </StyledCard>
  );
}

export default PropertyCard;