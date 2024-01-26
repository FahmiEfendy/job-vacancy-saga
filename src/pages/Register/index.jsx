// data = {
//   id: '',
//   fullName: '',
//   email: '',
//   password: '',
//   isEmployer: '',
// };
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
// import { encryptPayload } from '@utils/encryptPayload';
import { useDispatch } from 'react-redux';
// import { Input } from '@mui/joy/Input';

import classes from './style.module.scss';
import { register } from './actions';

const defaultTheme = createTheme();

export default function Register() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    isEmployer: false,
  });

  const handleChange = (value, type) => {
    setUser({
      ...user,
      [type]: type === 'isEmployer' ? !user.isEmployer : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      id: uuidv4(),
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      isEmployer: user.isEmployer ? true : false,
    };
    dispatch(register(dataUser));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <Typography component="h1" variant="h5" className={classes.title}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="fullname"
              //   autoComplete="fullname"
              autoFocus
              onChange={(e) => handleChange(e.target.value, 'fullname')}
              variant="filled"
            />
            {/* <Input placeholder="Type in here…" variant="outlined" /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              autoFocus
              onChange={(e) => handleChange(e.target.value, 'email')}
              variant="filled"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              onChange={(e) => handleChange(e.target.value, 'password')}
              variant="filled"
            />
            <FormControlLabel
              control={
                <Checkbox checked={user.isEmployer} onChange={(e) => handleChange(e.target.value, 'isEmployer')} />
              }
              label="I am an employer!"
              name="isEmployer"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
