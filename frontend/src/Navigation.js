import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
<>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Air Quality Mapping</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
        </Nav>
    </Navbar>
</> 
	);
}

export default Navigation;