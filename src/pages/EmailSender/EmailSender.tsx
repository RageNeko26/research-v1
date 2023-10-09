import { Container, Row, Col } from "react-bootstrap"
import { CodeBlock } from "react-code-blocks"


export default function EmailSender() {
  const sample: string = `
    package main

    import "fmt"

    func main() {
        fmt.Println("Hello world")
    }
    `
  

    return(
        <Container className="my-3">
          <Row lg={2}>
            <Col>
              <h2 className="fs-3">Email Sender</h2>
              <p className="text-secondary">Untuk mengirim Email, kita memerlukan sebuah protokol yang bernama SMTP. SMTP sendiri sudah built-in dari package net/http Golang. Selain itu kita juga harus memiliki credentialsnya. </p>
            </Col> 
          </Row>
          <Row lg={2}>
            <Col>
              <h2 className="fs-3">Basic Usage</h2>
              <p className="text-secondary">Berikut penggunaan basic untuk mail sender.</p>
              <CodeBlock text={ sample }
                          language="go"
                          showLineNumbers={true}
                          theme="atom-one-dark" />
            </Col>
          </Row>
        </Container>
      )
}
