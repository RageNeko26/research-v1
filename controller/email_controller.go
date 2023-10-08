package controller

import (
	"fmt"
	"net/http"
)

func SetupEmailRoutes() {
	http.HandleFunc("/api", handleHome)
}

func handleHome(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, "Welcome to API Version 1.0.0")
}
