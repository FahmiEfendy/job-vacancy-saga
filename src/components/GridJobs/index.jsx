import React from 'react';

import classes from './style.module.scss';

import { Box, Grid } from '@mui/material';

import { FormattedMessage } from 'react-intl';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WorkIcon from '@mui/icons-material/Work';

const index = () => {
  return (
    <>
      <Box className={classes['grid-wrapper']}>
        <Grid className={classes['grid']} container justifyContent="center" alignItems="center">
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <span>
                  <h3>Software Engineer</h3>
                  <small>
                    PT Mitra Persada Prima - <span>Jakarta</span>
                  </small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Full Time</p>
                </span>
                <button className={classes['btn-primary']}>
                  <AddBoxIcon className={classes['icon']} /> <FormattedMessage id="app_btn_apply_title" />
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default index;
