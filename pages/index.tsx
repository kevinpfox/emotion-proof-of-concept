import Link from "next/link";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";

const StyledMain = styled.main`
  max-width: 800px;
  a {
    text-decoration: none;
  }
`;

const Home: React.FC = () => {
  return (
    <StyledMain>
      <Container maxWidth="lg">
        <h1>INDEX PAGE</h1>
        <Link href="/about">ABOUT</Link>
      </Container>
    </StyledMain>
  );
};

export default Home;
