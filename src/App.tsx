import { Login } from './components/Login'
import { Routes } from './routes'
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes/>
      <Login/>
    </>
  );
};
