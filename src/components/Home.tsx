import { Container, Row, Col, Badge } from "react-bootstrap"

export default function Home() {
  return(
  <Container>
    <Row lg={2}>
      <Col>
         <div className="my-3">
            <h3 className="fs-4">API Reference for CVZN</h3>
              <p className="text-secondary">Sebuah dokumentasi dan sample code API Web Services CV Zaman Now. Diperuntukan untuk developer internal, baik Front-End Engineer maupun Back-end Engineer.</p>
    </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="my-3">
          <h3 className="fs-4">List API</h3>
          <p className="fs-5"><Badge>Forgot Password</Badge> </p> 
        </div>
      </Col>
    </Row>
  </Container>
    )
}
