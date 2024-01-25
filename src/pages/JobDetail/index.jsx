import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectJobDetail } from './selectors';
import { createJobApplicationRequest, deleteJobRequest, getJobDetailRequest } from './actions';

import classes from './style.module.scss';

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

const JobDetail = ({ jobDetail }) => {
  const dispatch = useDispatch();

  const { jobId } = useParams();

  const deleteHandler = () => {
    dispatch(deleteJobRequest(jobId));
  };

  const applyJobHandler = () => {
    const payload = {
      id: uuidv4(),
      jobId,
      userId: '2', // Get userId From Logged User
      coverLetter: 'This is Cover Letter Example',
    };

    dispatch(createJobApplicationRequest(payload));
  };

  useEffect(() => {
    dispatch(getJobDetailRequest(jobId));
  }, [dispatch, jobId]);

  console.log(jobDetail, '<<< JOB DETAIL');

  return jobDetail?.data?.length !== 0 ? (
    <>
      <p>This is Job Detail Page for job with if of {jobId}!</p>
      {/* This Button Only Visible To Employer */}
      <button type="button" onClick={deleteHandler}>
        Click To Delete This Job
      </button>
      <button type="button" onClick={applyJobHandler}>
        Click To Apply Job
      </button>
    </>
  ) : (
    <p>No Job with id of ${jobId}</p>
  );
};

JobDetail.propTypes = {
  jobDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  jobDetail: selectJobDetail,
});

export default connect(mapStateToProps)(JobDetail);
