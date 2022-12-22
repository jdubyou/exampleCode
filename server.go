package main

import (
	"encoding/json"
	"net/http"
)

func foo(w http.ResponseWriter, r *http.Request) {
	jbytes, err := json.Marshal("this is a test")
	if err != nil {
		//TODO
	}
	w.Write(jbytes)
}

func main() {
	http.HandleFunc("/foo", foo)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
