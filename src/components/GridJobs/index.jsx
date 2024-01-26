import React from 'react';

import classes from './style.module.scss';

import { Box, Grid } from '@mui/material';

import LogoComp from '../../static/images/spotify.png';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

const index = () => {
  return (
    <>
      <Box className={classes['grid-wrapper']}>
        <Grid className={classes['grid']} container justifyContent="center" alignItems="center">
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
          <Grid item>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                <img src={LogoComp} alt="" />
                <span>
                  <h3>Software Engineer</h3>
                  <small>Spotify</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>Duren Kalibata</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>Magang</p>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default index;
