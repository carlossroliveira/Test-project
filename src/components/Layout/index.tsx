import { Footer } from "./Footer";
import { Header } from "./Header";
import { ContainerSC } from "./layoutStyles";
import { Main } from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const Layout = () => {
  return (
    <ContainerSC>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header title={"Cadastrar usuário"} />
            <Main url={"http://localhost:4000/user/cadaster"} />
          </Route>

          <Route path="/login">
            <Header title={"Realizar login"} />
            <Main url={'http://localhost:4000/login'} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ContainerSC>
  );
};
