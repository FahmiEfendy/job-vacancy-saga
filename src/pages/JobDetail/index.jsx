import { useParams } from 'react-router-dom';

import classes from './style.module.scss';

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
  const { jobId } = useParams();

  return <>This is Job Detail Page for job with if of {jobId}!</>;
};

export default JobDetail;
