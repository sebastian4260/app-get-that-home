/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import TeamMemberCard from "../contents/TeamMemberCard";

const StyledDiv = styled.div`
  position: absolute;
  height: 486px;
  width:100%;
  top: 1588px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 64px;
  background: #FFFFFF;
`;


const Title = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 59px;
text-align: center;
color: #BF5F82;

`;


const DivMembers = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 1056px;
  height: 273px;
  gap:62px;
  top: 149px;
`;



function StyledTeamMembersSection (){
  return(
    <StyledDiv>
      <Title>Meet the team</Title>

      <DivMembers>
        <TeamMemberCard></TeamMemberCard>
      
      </DivMembers>


      
    </StyledDiv>
  );
}

export default StyledTeamMembersSection;