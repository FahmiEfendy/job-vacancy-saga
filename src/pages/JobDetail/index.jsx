import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectJobDetail } from './selectors';
import { deleteJobRequest, getJobDetailRequest } from './actions';

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

  useEffect(() => {
    dispatch(getJobDetailRequest(jobId));
  }, [dispatch, jobId]);

  console.log(jobDetail, '<<< JOB DETAIL');

  return jobDetail?.data?.length !== 0 ? (
    <>
      <p>This is Job Detail Page for job with if of {jobId}!</p>
      <button type="button" onClick={deleteHandler}>
        Click To Delete This Job
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
