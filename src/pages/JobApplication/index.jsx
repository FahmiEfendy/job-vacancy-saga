import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectJobApplication } from './selectors';
import { deleteJobApplicationRequest, getJobApplicationRequest } from './actions';

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

  const deleteApplicationHandler = () => {
    // Hit This API to Reject Employee (as Employer) or Cancel Apply Job (as Employee)
    dispatch(deleteJobApplicationRequest('a183e5c4-0e23-47d6-a69b-ec0d189d52ac')); // id
  };

  console.log(jobApplication, '<<< JOB APPLICATION');

  return (
    <>
      <p>This is Application List Pages!</p>
      <button type="button" onClick={deleteApplicationHandler}>
        Click Me to Delete a Application
      </button>
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
