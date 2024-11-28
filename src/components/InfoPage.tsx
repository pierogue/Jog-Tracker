import {FC} from "react";
import styled from "styled-components";

const InfoPage: FC = () => {
  const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    margin: 2rem 20vw;
    max-width: 800px;

    h1 {
      color: var(--apple-green);
    }
    
    @media(max-width: 700px){
      margin: 2rem;

    }
  `

  return(
    <InfoWrapper>
      <h1>INFO</h1>
      <p>
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </p>
    </InfoWrapper>
  )
}

export default InfoPage;