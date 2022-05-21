import styled from "styled-components";
import { TextField, InputLabel, Input, IconButton, Button } from "@mui/material";


export const TitleSC = styled.h1`
    color: white ;
    font-weight: 600;
`;

export const TextFieldSC = styled(TextField)`
  > label {
    color: white !important;
  }
  input {
    color: white !important;
    border-bottom: 2px solid white !important;
  }
`;

export const InputLabelSC = styled(InputLabel)`
  color: white !important;
`;

export const InputSC = styled(Input)`
  color: white !important;

  &::before {
    border-bottom: 2px solid white !important;
  }
`;

export const IconButtonSC = styled(IconButton)`
  color: white !important;
`;

export const ButtonSC = styled(Button)`
  background-color:#4AA9DA !important;
`;