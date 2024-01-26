import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { createJobRequest } from './actions';

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

const JobCreate = () => {
  const dispatch = useDispatch();

  const submitHandler = () => {
    const payload = {
      jobId: uuidv4(),
      employerId: '1', // Get employerId From Logged User
      companyName: 'Facebook',
      jobTitle: 'Full Stack Developer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id orci eget leo tincidunt commodo vel sed lorem. Donec cursus.      ',
      requirements: ['JavaScript', 'React', 'Express.js', 'MySQL'],
      jobLocation: 'United States',
      employmentType: 'Full Time',
      salary: 'Rp10.000.000',
    };

    dispatch(createJobRequest(payload));
  };

  return (
    <>
      <p>This is Create Job Page!</p>
      <button type="button" onClick={submitHandler}>
        Click To Add Dummy Data
      </button>
    </>
  );
};

export default JobCreate;
