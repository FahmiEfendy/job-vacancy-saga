import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectJobApplication } from './selectors';
import { getJobApplicationRequest } from './actions';

import classes from './style.module.scss';

const JobApplication = ({ jobApplication }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobApplicationRequest());
    // Hit This API To Get Job Applied By User
    // dispatch(getJobApplicationRequest({ userId: '1' }));
    // ===
    // Hit This API To Get Job Created By Employer
    // dispatch(getJobApplicationRequest({ employerId: '1' }));
    // ===
    // Hit This API To Get Applied User on a Job
    // dispatch(getJobApplicationRequest({ jobId: '544c877f-2545-43f0-8cf2-9e49c9929e49' }));
  }, [dispatch]);

  console.log(jobApplication, '<<< JOB APPLICATION');

  return (
    <>
      <p>This is Application List Pages!</p>
    </>
  );
};

JobApplication.propTypes = {
  jobApplication: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  jobApplication: selectJobApplication,
});

export default connect(mapStateToProps)(JobApplication);
