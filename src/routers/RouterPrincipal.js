import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Summary } from '../components/Summary';
import { Newcase } from '../components/Newcase';
import { Charts } from '../components/Charts';
import { Schedule } from '../components/Schedule';
import { Error } from '../components/Error';
import { Updatecase } from '../components/Updatecase';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-8">
            <li className="text-gray-500 hover:text-gray-800">
              <NavLink
                to='/newcase'
                className={ ({isActive}) => isActive ? "activado": ""}
              >
                New Case
              </NavLink>
            </li>
            <li className="text-gray-500 hover:text-gray-800">
              <NavLink
                to='/summary'
                className={ ({isActive}) => isActive ? "activado": ""}
              >
                Summary
              </NavLink>
            </li>
            <li className="text-gray-500 hover:text-gray-800">
              <NavLink
                to='/charts'
                className={ ({isActive}) => isActive ? "activado": ""}
              >
                Charts
              </NavLink>
            </li>
            <li className="text-gray-500 hover:text-gray-800">
              <NavLink
                to='/schedule'
                className={ ({isActive}) => isActive ? "activado": ""}
              >
                Schedule
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Newcase />} />
          <Route path='/newcase' element={<Newcase />} />
          <Route path='/summary' element={<Summary />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/updatecase' element={<Updatecase />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
