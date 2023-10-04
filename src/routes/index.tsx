import { Route, Routes } from 'react-router-dom';

import Home from '../pages';

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default ApplicationRoutes;
