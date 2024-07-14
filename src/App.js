import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/globalStyle';
import BeforeLogin from './pages/mainPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>  
          <Routes>       
            <Route path='/' element={<BeforeLogin />} />
          </Routes>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;
