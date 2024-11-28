import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import { GlobalStyles } from './styles/globalStyles';
import JogList from "./components/JogList";
import JogForm from "./components/JogForm";
import JogEmpty from "./components/JogEmpty";
import LoginPage from "./components/LoginPage";
import InfoPage from "./components/InfoPage";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import MobileNav from "./components/MobileNav";

const App: React.FC = () => {

  const jogs = true;
  const isMenuActive = useSelector((state: RootState) => state.menu.isMenuActive);

  return (
      <>
          <GlobalStyles/>
          <Router>
            <Header/>
            {
              isMenuActive ? <MobileNav/> :
              <Routes>
                <Route path={'/jogs'} element={
                  jogs ? <JogList/> : <JogEmpty/>
                }/>
                <Route path={'/'} index element={<LoginPage/>}/>
                <Route path={'/form'} element={<JogForm/>}/>
                <Route path={'/info'} element={<InfoPage/>}/>
              </Routes>
            }
          </Router>
      </>
  );
};

export default App;
