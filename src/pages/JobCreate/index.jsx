import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { createJobRequest } from './actions';

import classes from './style.module.scss';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';

// data = {
//   id: '',
//   companyName: '',
//   jobTitle: '',
//   jobDescription: '',
//   requirements: '',
//   jobLocation: '',
//   employmentType: '',
//   salary: '',
// };

const JobCreate = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({});

  const handleChange = (value, type) => {
    setPost({ ...post, [type]: value });
  };

  const submitHandler = () => {
    const post = {
      jobId: uuidv4(),
      // employerId: post.employerId,
      companyName: post.companyName,
      jobTitle: post.jobTitle,
      jobDescription: post.jobDescription,
      requirements: post.requirements,
      jobLocation: post.jobLocation,
      employmentType: post.employerType,
      salary: post.salary,
    };
    console.log(post);
    dispatch(createJobRequest(post));
  };

  return (
    <>
      {/* <p>This is Create Job Page!</p>
      <button type="button" onClick={submitHandler}>
        Click To Add Dummy Data
      </button> */}
      <div className={classes['create-data']}>
        <div className={classes['register']}>
          <div className={classes['container']}>
            <div className={classes['card']}>
              <div className={classes['card-item']}>
                <div className={classes['card-head']}>
                  <h2>Create Jobs</h2>
                </div>
                <div className={classes['input-form']}>
                  <div className={classes['input-item']}>
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      onChange={(e) => handleChange(e.target.value, 'companyName')}
                    />
                  </div>
                  <div className={classes['input-item']}>
                    <label>Job Title</label>
                    <input type="text" name="jobTitle" onChange={(e) => handleChange(e.target.value, 'jobTitle')} />
                  </div>
                  <div className={classes['input-item']}>
                    <label>Location</label>
                    <input
                      type="text"
                      name="jobLocation"
                      onChange={(e) => handleChange(e.target.value, 'jobLocation')}
                    />
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
                    ></textarea>
                  </div>
                  <div className={classes['input-item']}>
                    <label>Description</label>
                    <textarea
                      name="jobDescription"
                      onChange={(e) => handleChange(e.target.value, 'jobDescription')}
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" onClick={submitHandler}>
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
      </div>
    </>
  );
};

export default JobCreate;
