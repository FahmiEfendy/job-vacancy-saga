import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectJobDetail } from './selectors';
import { createJobApplicationRequest, deleteJobRequest, getJobDetailRequest } from './actions';

import classes from './style.module.scss';

import WorkIcon from '@mui/icons-material/Work';

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

const JobDetail = () => {
  // const { jobId } = useParams();

  return (
    <>
      <section className={classes['job-detail']}>
        <div className={classes['container']}>
          <div className={classes['job-item']}>
            <div className={classes['job-head']}>
              <h1>Staff Admin</h1>
              <p>
                PT Multi Hidrachrome Industri - <span>Jakarta</span>
              </p>
              <small>
                <WorkIcon className={classes['icon']} />
                Magang
              </small>
            </div>
            <div className={classes['job-body']}>
              <span>Tanggung Jawab</span>
              <ul>
                <li>Membuat Laporan Pembukuan</li>
                <li>Menginput Data</li>
              </ul>
              <span>Persyaratan minimum</span>
              <ul>
                <li>Usia Maksimal 30 Tahun</li>
                <li>Terbiasa Dengan Ms. Office</li>
                <li>Berpenampilan Rapih</li>
                <li>Berpengalaman Dibidang Accountan</li>
                <li>Diutamakan Berdomisili Di Jakarta Barat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetail;
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

// JobDetail.propTypes = {
//   jobDetail: PropTypes.object,
// };

// const mapStateToProps = createStructuredSelector({
//   jobDetail: selectJobDetail,
// });

// export default connect(mapStateToProps)(JobDetail);
