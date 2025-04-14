import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/departments" style={{ marginRight: '1rem' }}>Departments</Link>
      <Link to="/faculty" style={{ marginRight: '1rem' }}>Faculty</Link>
      <Link to="/login">Admin</Link>
    </nav>
  );
}

export default NavBar;
