/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@pages/Login/selectors';
import { createJobRequest } from './actions';

import classes from './style.module.scss';

const JobCreate = ({ login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({});

  const handleChange = (value, type) => {
    setPost({ ...post, [type]: value });
  };

  const submitHandler = () => {
    if (!login.isEmployer) return;

    const id = uuidv4();
    const payload = {
      id,
      jobId: id,
      employerId: login.id,
      companyName: post.companyName,
      jobTitle: post.jobTitle,
      jobDescription: post.jobDescription,
      requirements: post.requirements,
      jobLocation: post.jobLocation,
      employmentType: post.employmentType,
      salary: post.salary,
    };
    dispatch(createJobRequest(payload));

    navigate('/');
  };

  return (
    <div className={classes['create-data']}>
      <div className={classes.register}>
        <div className={classes.container}>
          <div className={classes.card}>
            <div className={classes['card-item']}>
              <div className={classes['card-head']}>
                <h2>Create Jobs</h2>
              </div>
              <div className={classes['input-form']}>
                <div className={classes['input-item']}>
                  <label>Company Name</label>
                  <input type="text" name="companyName" onChange={(e) => handleChange(e.target.value, 'companyName')} />
                </div>
                <div className={classes['input-item']}>
                  <label>Job Title</label>
                  <input type="text" name="jobTitle" onChange={(e) => handleChange(e.target.value, 'jobTitle')} />
                </div>
                <div className={classes['input-item']}>
                  <label>Location</label>
                  <input type="text" name="jobLocation" onChange={(e) => handleChange(e.target.value, 'jobLocation')} />
                </div>
                <div className={classes['input-item']}>
                  <label>Employment Type</label>
                  <input
                    type="text"
                    name="employmentType"
                    onChange={(e) => handleChange(e.target.value, 'employmentType')}
                  />
                </div>
                <div className={classes['input-item']}>
                  <label>Salary</label>
                  <input type="text" name="salary" onChange={(e) => handleChange(e.target.value, 'salary')} />
                </div>
                <div className={classes['input-item']}>
                  <label>Requirements</label>
                  <textarea
                    name="requirements"
                    onChange={(e) => handleChange(e.target.value, 'requirements')}
                    id=""
                    cols="30"
                    rows="5"
                  />
                </div>
                <div className={classes['input-item']}>
                  <label>Description</label>
                  <textarea
                    name="jobDescription"
                    onChange={(e) => handleChange(e.target.value, 'jobDescription')}
                    id=""
                    cols="30"
                    rows="10"
                  />
                </div>
              </div>
              <button type="submit" onClick={submitHandler}>
                <FormattedMessage id="app_register_title" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCreate.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(JobCreate);
