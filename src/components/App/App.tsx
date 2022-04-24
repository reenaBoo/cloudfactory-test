import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Quotes from '../Quotes/Quotes';
import Header from '../Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/crypto-test" element={<About />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
};

export default App;
