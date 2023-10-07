import { Container, Row, Col, Badge } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Home() {
  return(
  <Container>
    <Row lg={2}>
      <Col>
         <div className="my-3">
            <h3 className="fs-4">API Reference and Research</h3>
              <p className="text-secondary">Sebuah dokumentasi dan sample code API Web Services. Diperuntukan untuk keperluan penelitian, pembelajaran dan dokumentasi.</p>
    </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="my-3">
          <h3 className="fs-4">List API</h3>
          <Link to="/api/forgot-password" className="fs-5"><Badge>Forgot Password</Badge> </Link>
          <Link to="/" className="fs-5 mx-2"> <Badge>Email Sender</Badge> </Link>
        </div>
      </Col>
    </Row>
  </Container>
    )
}
