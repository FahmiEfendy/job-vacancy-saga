import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

// data = {
//   id: '',
//   companyName: '',
//   jobTitle: '',
//   jobLocation: '',
//   employmentType: '',
// };

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      <FormattedMessage id="app_greeting" />
    </div>
  );
};

export default Home;
