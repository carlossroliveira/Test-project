import { Footer } from './Footer'
import { Header } from './Header'
import { ContainerSC } from "./layoutStyles";
import { Main } from './Main'

export const Layout = () => {
  return (
    <ContainerSC>
      <Header />
      <Main />
      <Footer />
    </ContainerSC>
  );
};
