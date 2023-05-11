import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ListView from "./components/list-view";
import Steps from './components/steps';
import EditUser from './components/editUser';
import TestDemo from './components/TestDemo';
function App() {
  return (
    <React.Fragment>  
      <Routes>
      <Route path={'/'} element={<ListView />} />
        <Route path={'/steps'} element={<Steps />} />
        <Route path={'/edit-user'} element={<EditUser />} />
        <Route path={'/testdemo'} element={<TestDemo />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
