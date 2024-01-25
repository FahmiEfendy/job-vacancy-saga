import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectJob } from './selectors';
import { getJobRequest } from './actions';

// data = {
//   id: '',
//   companyName: '',
//   jobTitle: '',
//   jobLocation: '',
//   employmentType: '',
// };

const Home = ({ job }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobRequest());
  }, [dispatch]);

  console.log(job, '<<< JOB');

  return (
    <div>
      <FormattedMessage id="app_greeting" />
    </div>
  );
};

Home.propTypes = {
  job: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  job: selectJob,
});

export default connect(mapStateToProps)(Home);
