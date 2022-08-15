import { Outlet } from 'react-router-dom';
import { Container, Nav, Link } from './Header.styled';

export default function Header() {
  return (
    <header>
      <Nav>
        <Container>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </Container>
      </Nav>
      <Outlet />
    </header>
  );
}
