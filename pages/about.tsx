import React from 'react'
import { useRouter } from 'next/router';
import styled from '@emotion/styled'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';

// BabyCenter items
import { DiscoveryBarValues } from '../src/components/discoverBarHelper';
import LinkTab from '../src/components/LinkTab';


const StyledMain = styled.main<{ boxHeight: number, whatever: string }>`
  max-width: 800px;

  .aBoxHere {
    display: block;
    width: 200px;
    height: ${({ boxHeight }): string => String(boxHeight)}px;
    color: white;
    font-weight: bold;
    padding: 15px;
    background-color: ${({ whatever }): string => whatever};
  }

  .MuiButton-root {
    border: 3px solid red;
  }
`;

const StyledTabs = styled(Tabs)<{ whatnot: string }>`
  border-bottom: 1px solid  ${({ whatnot }): string => whatnot};
  margin-bottom: 25px;
`;

export default function About() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = React.useState(DiscoveryBarValues.Home);
  const [aBoxHeight, setABoxHeight] = React.useState(100);

  const onTabClick = (event: React.SyntheticEvent, newValue: DiscoveryBarValues) => {
    setCurrentTab(newValue);

    switch(newValue) {
      case "home":
        setABoxHeight(100);
        break;
      case "myActivity":
        setABoxHeight(200);
        break;
      default:
        setABoxHeight(300);
    }
  };

  return (
    <StyledMain boxHeight={aBoxHeight} whatever={"#AA0000"}>
      <Container maxWidth="lg">
        <h1>ABOUT PAGE</h1>

        <Button
          className="theButton"
          variant="contained"
          color="primary"
          onClick={() => router.push('/')}
        >
          TO HOME
        </Button>


        <br />
        <br />

        <div className="aBoxHere">
          A BOX
        </div>

        <br />
        <br />

        <StyledTabs
          onChange={onTabClick}
          value={currentTab}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          whatnot={"red"}
        >
          <LinkTab
            label="TAB 1"
            value={DiscoveryBarValues.Home}
            idx={0}
          />
          <LinkTab
            label="TAB 2"
            value={DiscoveryBarValues.MyActivity}
            idx={1}
          />
          <LinkTab
            label="TAB 3"
            value={DiscoveryBarValues.MyBookmarks}
            idx={2}
          />
        </StyledTabs>
      </Container>
    </StyledMain>
  );
}
