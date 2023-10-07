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


}
