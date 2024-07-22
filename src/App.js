import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/globalStyle';
import BeforeLogin from './pages/mainPage';
import AdminMenuPage from './pages/adminMenuPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>  
          <Routes>       
            <Route path='/' element={<BeforeLogin />} />
            <Route path='/menu' element={<AdminMenuPage />} />
          </Routes>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;