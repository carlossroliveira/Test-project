import { Form } from "../../Form";
import { ContainerSC } from "./mainStyles";

interface URLMain {
  url: string;
}

export const Main = (props:URLMain) => {
  return (
    <ContainerSC>
      <Form url={props.url} />
    </ContainerSC>
  );
};
