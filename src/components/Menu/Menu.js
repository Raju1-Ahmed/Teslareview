import React from 'react';
import { Button, Nav } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
    <Nav className="justify-content-center mt-3" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled">
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
        </div>
















        
    );
};

export default Menu;