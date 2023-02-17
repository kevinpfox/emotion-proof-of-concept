import Link from 'next/link';
import Container from '@mui/material/Container';


export default function Home() {
  return (
    <Container maxWidth="lg">
      <h1>INDEX PAGE</h1>

      <Link href="/about">
        Link TO ABOUT
      </Link>
    </Container>
  );
}
