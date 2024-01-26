import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import WorkIcon from '@mui/icons-material/Work';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Box, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import classes from './style.module.scss';

const index = ({ datas, isApplication, onHome }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const jobDetailHandler = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <Box className={classes['grid-wrapper']}>
      {datas?.length > 0 ? (
        <Grid className={classes.grid} container justifyContent="center" alignItems="center">
          {datas.map((data, idx) => (
            <Grid item key={idx} onClick={() => jobDetailHandler(isApplication ? data.detail.jobId : data.jobId)}>
              <div className={classes.card}>
                <div className={classes['card-header']}>
                  {/* <img src={LogoComp} alt="" /> */}
                  <span>
                    <h3>{isApplication ? data.detail.jobTitle : data.jobTitle}</h3>
                    <small>{data.companyName}</small>
                  </span>
                </div>
                <div className={classes['card-body']}>
                  <span>
                    <LocationOnIcon className={classes.icon} />
                    <p className={classes.location_text}>
                      {isApplication ? data.detail.jobLocation : data.jobLocation}
                    </p>
                  </span>
                  <span>
                    <WorkIcon className={classes.icon} />
                    <p>{isApplication ? data.detail.employmentType : data.employmentType}</p>
                  </span>
                  {!onHome && (
                    <button type="button" className={classes['btn-primary']}>
                      <AddBoxIcon className={classes.icon} /> <FormattedMessage id="app_btn_apply_title" />
                    </button>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h5" align="center">
          <FormattedMessage id="app_no_data" />
        </Typography>
      )}
    </Box>
  );
};

export default index;
