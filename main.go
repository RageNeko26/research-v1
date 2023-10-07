package main

import (
	"fmt"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

var auth smtp.Auth

type Request struct {
  from string
  to []string 
  subject string 
  body string
}

func NewRequest(to []string, subject, body string) *Request {
  return &Request{
    to: to,
    subject: subject,
    body: body,
  }
}

func (r *Request) SendEmail() (bool, error) {
  mime := "MIME-version: 1.0;\nContent-Type: text/plain; charset=\"UTF-8\";\n\n "
  subject := "Subject: " + r.subject + "!\n"
  msg := []byte(subject + mime + "\n" + r.body)
  addr := "smtp.gmail.com:587"

  if err := smtp.SendMail(addr, auth, "devgrumpycat@gmail.com", r.to, msg); err != nil {
    return false, err
  }

  return true, nil
}

func main() {
  err := godotenv.Load(".env")

  if err != nil {
    fmt.Println("Failed to load .env")
    return
  }

  smtp_username := os.Getenv("SMTP_USERNAME")
  smtp_password := os.Getenv("SMTP_PASSWORD")
  smtp_host := os.Getenv("SMTP_HOST")

  auth = smtp.PlainAuth("", smtp_username, smtp_password, smtp_host)

  templateData := struct {
      Name string
  }{
    Name: "Foo",
  }

  r := NewRequest([]string{"rneko2006@gmail.com"}, "Greet", "Hello, bro")
  


}
