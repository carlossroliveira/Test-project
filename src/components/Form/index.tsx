import React, { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import { FormControl, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  ButtonSC,
  IconButtonSC,
  InputLabelSC,
  InputSC,
  TextFieldSC,
  TitleSC,
} from "./formStyles";

interface State {
  name: string;
  password: string;
  showPassword?: boolean;
}

export const Form = () => {
  const [sendForm, setSendForm] = useState<State>();
  const [values, setValues] = useState<State>({
    name: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSendForm({
      ...values,
    });
  };

  console.log(sendForm);

  useEffect(() => {
    const info = {
      name: sendForm?.name,
      password: sendForm?.password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:4000/user/cadaster", requestOptions)
      .then((response) => response.json())
      .then((data) =>
        setSendForm({
          ...data,
        })
      );
  }, [sendForm?.name, sendForm?.password]);

  return (
    <>
      <TitleSC>Cadastrar usuário</TitleSC>

      <TextFieldSC
        onChange={handleChange("name")}
        id="Name-basic"
        label="Name"
        variant="standard"
      />

      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabelSC htmlFor="standard-adornment-password">
          Password
        </InputLabelSC>
        <InputSC
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButtonSC
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButtonSC>
            </InputAdornment>
          }
        />
      </FormControl>

      <ButtonSC variant="contained" onClick={handleMouseDownPassword}>
        Send
      </ButtonSC>
    </>
  );
};
