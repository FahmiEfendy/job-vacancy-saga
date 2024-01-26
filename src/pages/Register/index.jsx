// data = {
//   id: '',
//   fullName: '',
//   email: '',
//   password: '',
//   isEmployer: '',
// };
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { register } from './actions';

import classes from './style.module.scss';

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
    <>
      <div className={classes['register']}>
        <div className={classes['container']}>
          <div className={classes['card']}>
            <div className={classes['card-item']}>
              <div className={classes['card-head']}>
                <h2>
                  <FormattedMessage id="app_register_title" />
                </h2>
              </div>
              <div className={classes['input-form']}>
                <div className={classes['input-item']}>
                  <label>Full Name</label>
                  <input type="text" name="fullname" onChange={(e) => handleChange(e.target.value, 'fullname')} />
                </div>
                <div className={classes['input-item']}>
                  <label>Email</label>
                  <input type="email" name="email" onChange={(e) => handleChange(e.target.value, 'email')} />
                </div>
                <div className={classes['input-item']}>
                  <label>Password</label>
                  <input type="password" name="password" onChange={(e) => handleChange(e.target.value, 'password')} />
                </div>
              </div>
              <FormControlLabel
                control={
                  <Checkbox checked={user.isEmployer} onChange={(e) => handleChange(e.target.value, 'isEmployer')} />
                }
                label="I am an employer!"
                name="isEmployer"
              />
              <button type="submit" onClick={handleSubmit}>
                <FormattedMessage id="app_register_title" />
              </button>
              <div className={classes['regis']}>
                <p>
                  <FormattedMessage id="app_login_regis_label" />
                  <a href="/register">
                    <FormattedMessage id="app_login_regis_label_link" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
