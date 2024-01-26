import { useParams } from 'react-router-dom';

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
              <small><WorkIcon className={classes["icon"]} />Magang</small>
            </div>
            <div className={classes["job-body"]}>
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
