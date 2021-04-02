/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 273px;
  padding: 0px;
  background: #FFFFFF;
  border: none;
  margin: 0px 32px;
  position: static;
`;

const CardImage = styled.img`
  top: 0px;
  width: 180px;
  height: 180px;
  background-image: url(https://res.cloudinary.com/diqfeqkdb/image/upload/v1617339507/Ellipse_4_dkprkh.png);
  
`
const ImgDiv = styled.div`
  height: 180px;
  background: #E1E2E1;
`;

const MemberName = styled.h2`

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #000000;

`;

const IconsDiv = styled.div`
  position:static;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

`;



function PropertyCard ({name, img_url, icon }){
  return(
    <StyledCard>
      <ImgDiv>
        <CardImage src={img_url}/>
      </ImgDiv>
      <MemberName>
        {name ? name:"Sebastian Cervantes"}
      </MemberName>
     
      <IconsDiv>
      <IconsDiv>
        {icon ? icon:"Github"}
      </IconsDiv>
      <IconsDiv>
        {icon ? icon:"LinkedIn"}
      </IconsDiv>
      </IconsDiv>
    </StyledCard>
  );
}

export default PropertyCard;