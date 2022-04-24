import React from 'react';
import { Nav, Container } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const PickersSheet = () => {
  return (
    <>
      <div className='pickers_nav_container'>
        <Container>
          <Nav fill variant='tabs' defaultActiveKey='/'>
            <Nav.Item className='pickers_nav_item'>
              <LinkContainer to='/monday_pickers'>
                <Nav.Link>Monday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item className='pickers_nav_item'>
              <LinkContainer to='/tuesday_pickers'>
                <Nav.Link>Tuesday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item className='pickers_nav_item'>
              <LinkContainer to='/wednesday_pickers'>
                <Nav.Link>Wednesday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item className='pickers_nav_item'>
              <LinkContainer to='/thursday_pickers'>
                <Nav.Link>Thursday</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item className='pickers_nav_item'>
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
