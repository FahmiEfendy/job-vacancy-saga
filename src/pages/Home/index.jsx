import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ping } from '@containers/App/actions';
import classes from './style.module.scss';

import GridJobs from "../../components/GridJobs"
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
    <>
      <section className={classes['background-banner']}>
        <div className={classes['container']}>
          <div className={classes['hero-text']}>
            <h1>
              <FormattedMessage id="app_greeting" />
            </h1>
            <p>
              <FormattedMessage id="app_text_header" />
            </p>
          </div>
          <div className={classes['hero-btn']}>
            <a href="" className={classes['btn-primary']}>
              <FormattedMessage id="app_btn_hero_title" />
            </a>
            <a href="" className={classes['btn-secondary']}>
            <FormattedMessage id="app_btn_hero_title2" />
            </a>
          </div>
        </div>
      </section>
      <section className={classes['job-list']}>
        <div className={classes['container']}>
          <div className={classes['list-header']}>
            <h2><FormattedMessage id="app_job_title_header" /></h2>
            <p><FormattedMessage id='app_job_desc_header' />
            </p>
          </div>

          {/* Search */}
          <div className={classes['search-job']}>
            <div className={classes['search-item']}>
              <input type="text" />
              <button><FormattedMessage id="app_btn_search_title" /></button>
            </div>
          </div>

          {/* List Job */}
          <GridJobs />
        </div>
      </section>
    </>
  );
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

Home.propTypes = {
  job: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  job: selectJob,
});

export default connect(mapStateToProps)(Home);
