
import styled from "styled-components";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom right, #D1E8E2 10%, #D1E8E2 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Dashboard;
