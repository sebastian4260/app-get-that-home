/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import Template from "../pages/template";
import StyledLoginButton from "../components/UI/buttons/StyledLoginButton";
import PropertyCard from "../components/contents/PropertyCard";
import styled from "@emotion/styled";

const PropertiesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  padding: 0px 300px;
  width: 1136px;
  height: 1207px;
  margin: 204px 0px;
  
  
`;


function Find (){
  

  return(
      <Template>

        <PropertiesDiv>

          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
          <PropertyCard></PropertyCard>
        </PropertiesDiv>

        
        

          
            
          

      </Template>

      
 

          )
  };
       

export default Find;