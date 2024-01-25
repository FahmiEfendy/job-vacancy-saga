import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectJobDetail } from './selectors';
import { getJobDetailRequest } from './actions';

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

  useEffect(() => {
    dispatch(getJobDetailRequest(jobId));
  }, [dispatch]);

  console.log(jobDetail, '<<< JOB DETAIL');

  return <>This is Job Detail Page for job with if of {jobId}!</>;
};

JobDetail.propTypes = {
  jobDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  jobDetail: selectJobDetail,
});

export default connect(mapStateToProps)(JobDetail);
