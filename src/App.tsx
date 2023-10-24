import React from 'react';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import GamTest from "./pages/GamTest";
import Layout from './component/Layout';
import GamInfo from './pages/GamInfo';
import GamBoard from './pages/GamBoard';
import NotFound from './pages/NotFound';
import GamResult from './pages/GamResult';
import TempIntro from './pages/TempIntro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/gamTest" element={<GamTest />}></Route>
        <Route path="/gamInfo" element={<GamInfo />}></Route>
        <Route path="/gamBoard" element={<GamBoard />}></Route>
        <Route path="/gamResult" element={<GamResult />}></Route>
      </Route>
      <Route path="/intro" element={<TempIntro />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
