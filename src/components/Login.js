import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

export default function Login() {
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Log me in
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
