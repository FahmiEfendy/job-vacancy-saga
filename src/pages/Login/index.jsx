/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getLogin } from './actions';

import classes from './style.module.scss';

const Login = () => {
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

    navigate('/');
  };

  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <div className={classes.card}>
          <div className={classes['card-item']}>
            <div className={classes['card-head']}>
              <h2 className={classes['header-title']}>
                <FormattedMessage id="app_login_title" />
              </h2>
            </div>
            <div className={classes['input-form']}>
              <div className={classes['input-item']}>
                <label>Email</label>
                <input type="email" name="email" onChange={(e) => handleChange(e.target.value, 'email')} />
              </div>
              <div className={classes['input-item']}>
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => handleChange(e.target.value, 'password')} />
              </div>
            </div>
            <button type="submit" onClick={handleSubmit}>
              <FormattedMessage id="app_login_title" />
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
