import 'aos/dist/aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

import ApplicationRoutes from './routes';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <ApplicationRoutes />;
}

export default App;
