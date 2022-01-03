import BreweriesDetail from './BreweriesDetail';
import BreweriesData from './BreweriesData';
import { Routes, Route } from 'react-router-dom';

const Body = () => {
  return (
    <Routes>
      <Route exact path="/" element={<BreweriesData />}></Route>
      <Route exact path="/:id" element={<BreweriesDetail />}></Route>
    </Routes>
  );
};

export default Body;
