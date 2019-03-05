import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from './assets/logo.png';
class Header extends React.Component {
  render() {
  return (
    <div className='header'>
      <header>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="100"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Order</Nav.Link>
            <Nav.Link href="#link">Referals</Nav.Link>
            <Button >Join Our Team</Button>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      </header>
    </div>
  );
}
}
export default Header;
