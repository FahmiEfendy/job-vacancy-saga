import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// import { login } from './actions';
import classes from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import { getLogin } from './actions';
import { selectLogin } from './selectors';

const defaultTheme = createTheme();
const Login = ({ login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleChange = (value, type) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      email: user.email,
      password: user.password,
    };
    dispatch(getLogin(dataUser));
    // if (login.isEmployer === true) {

    // }
    navigate('/');
  };
  console.log(login, '<<< LOGIN');
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}
              className={classes.button}
            >
              Login
            </Button>
            <Box className={classes.footer}>
              <Link href="/register" variant="body2" className={classes.link}>
                Don't have an account? Sign Up
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

Login.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Login);
