import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navPad = {
    padding: "10px 10px 10px 20px",
};

export const Navigation = () => {
    return (
<>
    <Navbar style={navPad} bg="dark" variant="dark" sticky="top">
        <Navbar.Brand as={Link} to="/">Air Quality Mapping</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
        </Nav>
    </Navbar>
</> 
	);
}

export default Navigation;