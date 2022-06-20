import React from "react";
import styled from "styled-components";
import { IoStatsChart, IoCashOutline } from "react-icons/io5";
import { themeColor, hoverEffect } from "./utils";

function Walletbal() {
  return (
    <EarningsCard>
     <div style={{ paddingRight: '70px' }}>
      <CardContent>
        <Chart>
          <IoCashOutline />
        </Chart>
        <EarningsText>Balance</EarningsText>
        <Earning>$78.90</Earning>
      </CardContent>
     </div>
     <div className="Stats">
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningsText>Profit</EarningsText>
        <Earning>$78.90</Earning>
      </CardContent>
      
     </div>
    </EarningsCard>
  );
}

const EarningsCard = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 15rem;
  width: 61rem;
  background-color: #D9B08C;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    padding: auto;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Earning = styled.h2`
  text-align: center;
`;

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

//const Address = styled.div`
  //color: black;
//`;

export default Walletbal;
