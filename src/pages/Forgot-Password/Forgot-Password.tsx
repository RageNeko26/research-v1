import { Container, Row, Col } from "react-bootstrap";


export default function ForgotPassword() {
  return(
      <Container className="my-3">
       <Row lg={2}>
        <Col>
          <h2>Forgot Password</h2>
          <p className="text-secondary">Fitur ini bekerja dengan menggunakan Redis sebagai teknologi Cache. Dengan adanya cache, kita bisa melakukan tranksaksi data dengan lebih cepat.</p>
        </Col>
       </Row>
      </Container>
    )
} 
