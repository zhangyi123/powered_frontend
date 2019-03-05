import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Footer extends React.Component {
  render() {
  return (
    <div className='footer'>
      <footer>
        <Container>
          <Row>
            <Col>
            </Col>
            <Col>
              <a href="www.google.com">Press</a><br />
              <a href="www.google.com">Become a Courier</a><br />
              <a href="www.google.com">Return Policy</a><br />
              <a href="www.google.com">Terms & Conditions</a><br />
            </Col>
            <Col>
              <a href="www.google.com">Privacy Agreement</a><br />
              <a href="www.google.com">About Us</a><br />
              <a href="www.google.com">FAQs</a><br />
              <a href="www.google.com">Contact</a><br />
            </Col>

            <Col>
            </Col>
          </Row>
        </Container>
      </footer>

    </div>
  );
}
}

export default Footer;
