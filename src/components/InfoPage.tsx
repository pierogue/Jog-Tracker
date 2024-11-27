import {FC} from "react";
import styled from "styled-components";

const InfoPage: FC = () => {
  const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    padding: 40px 30vw;
    
    h1 {
      color: var(--apple-green)
    }
  `

  return(
    <InfoWrapper>
      <h1>INFO</h1>
      <p>
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </p>
    </InfoWrapper>
  )
}

export default InfoPage;