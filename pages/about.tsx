import * as React from 'react';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
  );
}
