import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Error404 from './pages/Error404/Error404'
import Profile from './pages/Profile/Profile';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './service/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error404 message="La page que vous demandez n'existe pas" />} />
      </Routes>
    </Router>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
