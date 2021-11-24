import { NextPage } from 'next';
import { useEffect } from 'react';

import { getCurrentInfo } from '../services/weather.service';

const Home: NextPage = () => {
  useEffect(() => {
    getCurrentInfo('Texas')
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  }, []);

  return <></>;
};

export default Home;
