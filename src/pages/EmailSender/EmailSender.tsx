import { Container, Row, Col } from "react-bootstrap"

export default function EmailSender() {
    return(
        <Container className="my-3">
          <Row lg={2}>
            <Col>
              <h2 className="fs-3">Email Sender</h2>
              <p className="text-secondary">Untuk mengirim Email, kita memerlukan sebuah protokol yang bernama SMTP. SMTP sendiri sudah built-in dari package net/http Golang. Selain itu kita juga harus memiliki credentialsnya. Berikut adalah sample yang akan dibuat dengan Golang.</p>
            </Col>
          </Row> 
        </Container>
      )
}
