import { ContainerSC } from "./footerStyles";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <ContainerSC>
      <h1>&copy; {currentYear} | Marcondes F Pinheiro</h1>
    </ContainerSC>
  );
};
