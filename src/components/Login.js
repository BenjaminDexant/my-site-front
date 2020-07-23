import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/login`;
    const formData = {
      name,
      password,
    };

    axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          const userData = {
            ...response.data,
            type: "Admin",
          };
          window.localStorage.setItem("user", JSON.stringify(userData));
          Swal.fire({
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            text: "Welcome master!",
            timer: 1000,
            backdrop: "rgba(0,0,0,0.5)",
          });
          return history.push("/");
        }
        return () => {
          Swal.fire({
            icon: "error",
            showCancelButton: false,
            showConfirmButton: false,
            text: "Invalid datas 😕",
            timer: 1000,
            backdrop: "rgba(0,0,0,0.5)",
          });
        };
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          text: "Something went wrong 😕",
          timer: 1000,
          backdrop: "rgba(0,0,0,0.5)",
        });
      });
  };

  return (
    <div>
      <Container component="main" maxWidth="xs" className="connexion-form">
        <CssBaseline />
        <div>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text"
              id="name"
              name="name"
              label="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              name="password"
              id="password"
              label="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={(e) => handleClick(e)}
            >
              Log me in
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
