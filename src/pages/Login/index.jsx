import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';


import classes from './style.module.scss';
import { getLogin } from './actions';
import { selectLogin } from './selectors';

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
    <>
      <div className={classes['login']}>
        <div className={classes['container']}>
          <div className={classes['card']}>
            <div className={classes['card-item']}>
              <div className={classes['card-head']}>
                <h2 className={classes["header-title"]}>
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
              <button type="submit" onSubmit={handleSubmit}>
                <FormattedMessage id="app_login_title" />
              </button><br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Login);
