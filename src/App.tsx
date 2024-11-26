import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { GlobalStyles } from './styles/globalStyles';
import JogList from "./components/JogList";
import JogForm from "./components/JogForm";
import JogEmpty from "./components/JogEmpty";
import LoginPage from "./components/LoginPage";
const App: React.FC = () => {

  const jogs = false;
  return (
      <>
          <GlobalStyles/>
          <Router>
            <Header/>
            <Routes>
              <Route path={'/jogs'} element={jogs ? <JogList/> : <JogEmpty/>}/>
              <Route path={'/login'} element={<LoginPage/>}/>
              <Route path={'/form'} element={<JogForm/>}/>
            </Routes>
          </Router>
      </>
  );
};

export default App;
