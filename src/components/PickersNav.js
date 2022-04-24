import React from 'react';
import { Nav, Container } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const PickersSheet = () => {
  return (
    <>
      <div>
        <Container>
          <Nav fill variant='tabs' defaultActiveKey='/'>
            <Nav.Item>
              <LinkContainer to='/monday_pickers'>
                <Nav.Link>Monday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to='/tuesday_pickers'>
                <Nav.Link>Tuesday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to='/wednesday_pickers'>
                <Nav.Link>Wednesday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to='/thursday_pickers'>
                <Nav.Link>Thursday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to='/friday_pickers'>
                <Nav.Link>Friday</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default PickersSheet;
