import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';

export default function About() {
  const router = useRouter();

  return (
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
    </Container>

    
    // <Container maxWidth="lg">
    //   <Box
    //     sx={{
    //       my: 4,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Material UI - Next.js example in TypeScript
    //     </Typography>
    //     <Box maxWidth="sm">
    //       <Button variant="contained" component={Link} noLinkStyle href="/">
    //         Go to the home page
    //       </Button>
    //     </Box>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}
