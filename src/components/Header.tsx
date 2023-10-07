import { Nav, Navbar, Container } from "react-bootstrap"

export default function Header() {
  return(
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Research</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="#features">Documentation</Nav.Link>
            <Nav.Link href="#pricing">Server Status</Nav.Link>
             <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
        </Container>
      </Navbar> 
      
    )
}
