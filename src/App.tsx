import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from './pages/HomeTemplate';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='' element={<HomeTemplate />}>
            <Route index element={<h1>HOME</h1>}></Route>
            <Route path='/contact' element={<h1>CONTACT</h1>}></Route>
            <Route path='/product' element={<h1>PROPDUCT</h1>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
