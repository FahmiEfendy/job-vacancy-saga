import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './style.module.scss';

import { Box, Grid } from '@mui/material';

// import LogoComp from '../../static/images/spotify.png';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';

const index = ({ datas }) => {
  const navigate = useNavigate();

  const jobDetailHandler = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <Box className={classes['grid-wrapper']}>
      <Grid className={classes['grid']} container justifyContent="center" alignItems="center">
        {datas.map((data, idx) => (
          <Grid item key={idx} onClick={() => jobDetailHandler(data.jobId)}>
            <div className={classes['card']}>
              <div className={classes['card-header']}>
                {/* <img src={LogoComp} alt="" /> */}
                <span>
                  <h3>{data.jobTitle}</h3>
                  <small>{data.companyName}</small>
                </span>
              </div>
              <div className={classes['card-body']}>
                <span>
                  <LocationOnIcon className={classes['icon']} /> <p>{data.jobLocation}</p>
                </span>
                <span>
                  <WorkIcon className={classes['icon']} /> <p>{data.employmentType}</p>
                </span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default index;
