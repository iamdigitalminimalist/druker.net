import { Container } from '@ordev/shared/ui';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Container>
      <div>
        <h1>Opps. There is nothing here</h1>
        <Link href="/">Go back home</Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
