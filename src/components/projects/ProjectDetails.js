import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card border="default" className="mx-5">
            <Card.Header>รายละเอียดโครงการ</Card.Header>
            <Card.Body>
              <Card.Title>ชื่อโครงการ: {id}</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                odio voluptates, quod quos mollitia commodi quaerat nisi fuga?
                Id maxime labore omnis nulla magnam nisi accusamus soluta et
                nesciunt voluptates?
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">โพสต์โดย มโนชญ์ หลุ่ยจิ๋ว</small>
              <br />
              <small className="text-muted">เมื่อ 3 นาทีที่แล้ว</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
