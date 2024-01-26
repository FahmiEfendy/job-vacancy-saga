import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@pages/Login/selectors';
import GridJobs from '../../components/GridJobs';
import { selectJobApplication } from './selectors';
import { deleteJobApplicationRequest, getJobApplicationRequest } from './actions';

import classes from './style.module.scss';

const JobApplication = ({ login, jobApplication }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (login.isEmployer) {
      // Hit This API To Get Job Created By Employer
      dispatch(getJobApplicationRequest({ employerId: login.id }));
    } else {
      // Hit This API To Get Job Applied By User
      dispatch(getJobApplicationRequest({ userId: login.id }));
    }
    // Hit This API To Get Applied User on a Job
    // dispatch(getJobApplicationRequest({ jobId: '5' }));
  }, [dispatch, login.id, login.isEmployer]);

  const deleteApplicationHandler = () => {
    // Hit This API to Reject Employee (as Employer) or Cancel Apply Job (as Employee)
    dispatch(deleteJobApplicationRequest(jobApplication[0]?.id));
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h5" align="center" className={classes.header}>
        {login.isEmployer ? (
          <FormattedMessage id="applicant_employer_header_text" />
        ) : (
          <FormattedMessage id="applicant_header_text" />
        )}
      </Typography>
      <GridJobs datas={jobApplication.data} isApplication hideIcon onDelete={deleteApplicationHandler} />
    </Box>
  );
};

JobApplication.propTypes = {
  jobApplication: PropTypes.object,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  jobApplication: selectJobApplication,
  login: selectLogin,
});

export default connect(mapStateToProps)(JobApplication);
