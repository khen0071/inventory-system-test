import React from 'react';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
      <div>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <Link to='/'>
              <Navbar.Brand>DATA</Navbar.Brand>
            </Link>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
              id='basic-navbar-nav'
              className='justify-content-end'
            >
              <Nav className='me-auto'>
                {/* <LinkContainer to='/products'>
                  <Nav.Link>Products</Nav.Link>
                </LinkContainer> */}

                <NavDropdown title='PICKERS' id='basic-nav-dropdown'>
                  {/* <Link to='/centralpo'>
                    <NavDropdown.Item href='#action/3.2'>
                      CENTRAL DATA
                    </NavDropdown.Item>
                  </Link> */}
                  <Link to='/monday_pickers'>
                    <NavDropdown.Item href='#action/3.1'>
                      PO PICKERS
                    </NavDropdown.Item>
                  </Link>

                  <NavDropdown.Item href='#action/3.3'>
                    DELIVERIES
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action/3.4'>
                    STATS / LOGS
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {/* <Nav.Link href='/users'>Users</Nav.Link> */}
                {/* <Nav.Link href='/login'>Login</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
