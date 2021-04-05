/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 20px;
  position: static;
  width: 280px;
  height: 274px;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;


const CardImageLand = styled.img`
  position: static;
  width: 240px;
  height: 180px;
  margin: 8px 0px;
  background-image: url(https://res.cloudinary.com/diqfeqkdb/image/upload/v1617586325/rafiki_bbztx6.png);
`;
const ImgDiv1 = styled.div`
  height: 180px;
`;

const CardImageHome = styled.img`
  position: static;
  width: 240px;
  height: 180px;
  margin: 8px 0px;
  background-image: url(https://res.cloudinary.com/diqfeqkdb/image/upload/v1617586360/pana_owm5ml.png);
`;

const ImgDiv2 = styled.div`
  height: 180px;

`;


const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 54px;
`;

const TextDiv = styled.div`
  position: static;
  width: 225px;
  height: 54px;
  margin: 8px 0px;

  p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #373737;
  }

  h3{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #373737;

  }
`;




function SignUpCard (){
  return(
    <CardDiv>
            <StyledCard>
              <ImgDiv1>
              <CardImageLand></CardImageLand>
              </ImgDiv1>
              <TextDiv>
              <h3>Landlord</h3>
              <p>You want to rent or sell a home</p>
              </TextDiv>
            </StyledCard>

            <StyledCard>
              <ImgDiv2>
              <CardImageHome></CardImageHome>
              </ImgDiv2>
              <TextDiv>
              <h3>Home seeker</h3>
              <p>You want to find a home</p>
              </TextDiv>
            </StyledCard>
      </CardDiv>
  );
}

export default SignUpCard;