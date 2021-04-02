/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import PropertyCard from "../components/contents/PropertyCard";
import StyledSearch from "../components/contents/StyledSearch";
import Template from "../pages/template";
import StyledProperties from "../components/contents/StyledProperties";
import StyledCreateAccountSection from "../components/contents/StyledCreateAccountSection";

const ListProperties = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  overflow: auto;
`;


function Home (){
  

  return(
      <Template>

          <StyledSearch/>
          <StyledProperties></StyledProperties>
          <StyledCreateAccountSection></StyledCreateAccountSection>
            
          

      </Template>

      
 

          )
  };
       

export default Home;






