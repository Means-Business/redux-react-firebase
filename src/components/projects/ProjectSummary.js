import React from 'react';

import { Card } from 'react-bootstrap';

export default function ProjectSummary({ project }) {
  return (
    <>
      <Card border="success" style={{ width: '18rem' }}>
        <Card.Header>{project.id}</Card.Header>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <br />
    </>
  );
}
