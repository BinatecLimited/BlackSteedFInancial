import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "./assets/avatarImage.jpeg";
import { darkThemeColor } from "./utils";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Kishan Sheth</Name>
        <Badge />
        <Address>WalletAddress: 0x00a....</Address>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Lin>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Lin>
          <Lin>
            <RiFileCopyLine />
            <h3>Transactions</h3>
          </Lin>
          <Link to='/Wallet'>
            <Lin>
              <FaWallet />
              <h3>Wallet</h3>
            </Lin>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 0 0 0 0;
  background-color: #2C3531;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Address = styled.div`
  padding-top: 10px;
  font-size: 80%;
  color: white;
`

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: #116466;
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Lin = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 80%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: #D1E8E2;
    padding-bottom: 50px;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
    width: 40%;
    margin: 40px 0 0 90px;
  }
  
`;

export default Sidebar;


//<Link>
         //   <AiOutlinePieChart />
       //     <h3>Reports</h3>
     //     </Link>