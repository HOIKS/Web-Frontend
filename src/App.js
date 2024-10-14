import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/globalStyle';
import LandingPage from './pages/landingPage';

import DashBoardPage from './pages/dashBoardPage';

import MenuSettingPage from './pages/menuSettingPage';
import CountSettingPage from './pages/countSettingPage';
import PaymentSettingPage from './pages/paymentSettingPage';

import FinishKioskPage from './pages/finishKioskPage';
import FinishCalendarPage from './pages/finishCalendarPage';

import ReportViewPage from './pages/reportViewPage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>  
          <Routes>       
            <Route path='/' element={<LandingPage />} />
            <Route path='/dashboard' element={<DashBoardPage />} />
            <Route path='/manage/menu' element={<MenuSettingPage />} />
            <Route path='/manage/count' element={<CountSettingPage />} />
            <Route path='/manage/payment' element={<PaymentSettingPage />} />
            <Route path='/finish/kiosk' element={<FinishKioskPage />} />
            <Route path='/finish/calendar' element={<FinishCalendarPage />} />
            <Route path='/report' element={<ReportViewPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;