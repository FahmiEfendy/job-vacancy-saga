import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getJobRequest } from './actions';
import { selectJob } from './selectors';
import GridJobs from '../../components/GridJobs';

import classes from './style.module.scss';

const Home = ({ job }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dispatch(getJobRequest()));
  }, [dispatch]);

  useEffect(() => {
    const filtereData = job?.data?.filter((d) => d?.jobTitle?.toLowerCase().includes(input));

    setData(filtereData);
  }, [input, job.data]);

  return (
    <>
      <section className={classes['background-banner']}>
        <div className={classes.container}>
          <div className={classes['hero-text']}>
            <h1>
              <FormattedMessage id="app_greeting" />
            </h1>
            <p>
              <FormattedMessage id="app_text_header" />
            </p>
          </div>
          <div className={classes['hero-btn']}>
            <button type="button" className={classes['btn-primary']}>
              <FormattedMessage id="app_btn_hero_title" />
            </button>
            <a href="/" className={classes['btn-secondary']}>
              <FormattedMessage id="app_btn_hero_title2" />
            </a>
          </div>
        </div>
      </section>
      <section className={classes['job-list']}>
        <div className={classes.container}>
          <div className={classes['list-header']}>
            <h2>
              <FormattedMessage id="app_job_title_header" />
            </h2>
            <p>
              <FormattedMessage id="app_job_desc_header" />
            </p>
          </div>
          {/* Search */}
          <div className={classes['search-job']}>
            <div className={classes['search-item']}>
              <input type="text" onChange={(e) => setInput(e.target.value)} />
              <button type="button">
                <FormattedMessage id="app_btn_search_title" />
              </button>
            </div>
          </div>
          {/* List Job */}
          <GridJobs datas={data} hideIcon />
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
