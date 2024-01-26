import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectJobDetail } from './selectors';
import { createJobApplicationRequest, deleteJobRequest, getJobDetailRequest } from './actions';

import classes from './style.module.scss';

import jobDetailReducer from './reducer';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { FormattedMessage } from 'react-intl';

import GridJobs from '../../components/GridJobs';

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
      employerId: '3', // Get employerId from Logged User
      coverLetter: 'This is Cover Letter Example',
    };

    dispatch(createJobApplicationRequest(payload));
  };

  useEffect(() => {
    dispatch(getJobDetailRequest(jobId));
  }, [dispatch, jobId]);

  console.log(jobDetail, '<<< JOB DETAIL');

  return (
    <>
      <section className={classes['job-detail']}>
        <div className={classes['container']}>
          <div className={classes['title-head']}>
            <h1>
              <FormattedMessage id="app_header_title_job" />
            </h1>
          </div>
          <div className={classes['job-item']}>
            <div className={classes['job-head']}>
              <h1>{jobDetail?.data[0]?.jobTitle}</h1>
              <p>
                {jobDetail?.data[0]?.companyName} - <span>{jobDetail?.data[0]?.jobLocation}</span>
              </p>
              <small>
                <MonetizationOnIcon className={classes['icon']} />
                {jobDetail?.data[0]?.salary}
              </small>
              <small>
                <WorkIcon className={classes['icon']} />
                {jobDetail?.data[0]?.employmentType}
              </small>
              <hr />
              <div className={classes['btn-apply']}>
                <button>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
            <div className={classes['job-body']}>
              <span>
                <FormattedMessage id="app_header_desc" />
              </span>
              <p>{jobDetail?.data[0]?.jobDescription}</p>
              <span>
                <FormattedMessage id="app_header_req" />
              </span>
              <p>{jobDetail?.data[0]?.requirements}</p>
            </div>
          </div>
          <div className={classes['job-vacancy']}>
            <div className={classes['title-head']}>
              <h4>
                <FormattedMessage id="app_header_title_job2" />
              </h4>
            </div>
            <GridJobs />
          </div>
        </div>
      </section>
    </>
  );
};
// const JobDetail = ({ jobDetail }) => {
//   const dispatch = useDispatch();

//   const { jobId } = useParams();

//   const deleteHandler = () => {
//     dispatch(deleteJobRequest(jobId));
//   };

//   const applyJobHandler = () => {
//     const payload = {
//       id: uuidv4(),
//       jobId,
//       userId: '2', // Get userId From Logged User
//       employerId: '3', // Get employerId from Logged User
//       coverLetter: 'This is Cover Letter Example',
//     };

//     dispatch(createJobApplicationRequest(payload));
//   };

//   useEffect(() => {
//     dispatch(getJobDetailRequest(jobId));
//   }, [dispatch, jobId]);

//   console.log(jobDetail, '<<< JOB DETAIL');

//   return jobDetail?.data?.length !== 0 ? (
//     <>
//       <p>This is Job Detail Page for job with if of {jobId}!</p>
//       {/* This Button Only Visible To Employer */}
//       <button type="button" onClick={deleteHandler}>
//         Click To Delete This Job
//       </button>
//       <button type="button" onClick={applyJobHandler}>
//         Click To Apply Job
//       </button>
//     </>
//   ) : (
//     <p>No Job with id of ${jobId}</p>
// >>>>>>> 3c5498a48f855b67e3094b9cf328945a8b174da5
//   );
// };

JobDetail.propTypes = {
  jobDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  jobDetail: selectJobDetail,
});

export default connect(mapStateToProps)(JobDetail);
