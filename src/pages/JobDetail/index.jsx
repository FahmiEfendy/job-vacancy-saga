import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate, useParams } from 'react-router-dom';

import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { selectLogin } from '@pages/Login/selectors';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import classes from './style.module.scss';
import { selectJobDetail } from './selectors';
import { createJobApplicationRequest, deleteJobRequest, getJobDetailRequest } from './actions';

const JobDetail = ({ jobDetail, login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { jobId } = useParams();

  const deleteHandler = () => {
    if (!login.isEmployer) return;

    dispatch(deleteJobRequest(jobDetail?.data[0]?.id));
    navigate('/');
  };

  const applyJobHandler = () => {
    if (login.isEmployer) return;

    const payload = {
      id: uuidv4(),
      jobId,
      userId: login.id,
      employerId: jobDetail?.data[0]?.employerId,
      // coverLetter: 'This is Cover Letter Example',
    };

    dispatch(createJobApplicationRequest(payload));
    navigate('/');
  };

  useEffect(() => {
    dispatch(getJobDetailRequest(jobId));
  }, [dispatch, jobId]);

  return (
    <section className={classes['job-detail']}>
      <div className={classes.container}>
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
              <MonetizationOnIcon className={classes.icon} />
              {jobDetail?.data[0]?.salary}
            </small>
            <small>
              <WorkIcon className={classes.icon} />
              {jobDetail?.data[0]?.employmentType}
            </small>
            <hr />
            <div className={classes['btn-apply']}>
              <button
                type="button"
                onClick={login.isEmployer ? deleteHandler : applyJobHandler}
                className={login.isEmployer ? classes.button_delete : classes.button}
              >
                <AddBoxIcon className={classes.icon} />
                {login.isEmployer ? (
                  <FormattedMessage id="app_btn_delete_title" />
                ) : (
                  <FormattedMessage id="app_btn_apply_title" />
                )}
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
      </div>
    </section>
  );
};

JobDetail.propTypes = {
  jobDetail: PropTypes.object,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  jobDetail: selectJobDetail,
  login: selectLogin,
});

export default connect(mapStateToProps)(JobDetail);
