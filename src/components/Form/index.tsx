import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { DivSC, InputMainSC, InputSC, ParagraphLinkSC, ParagraphSC } from "./formStyles";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
interface IFormInputs {
  name: string;
  password: string;
}

interface URLAxios {
  url: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required("Nome Obrigatório (a)")
      .min(3, "Deve ter no mínimo 3 caracteres"),
      password: yup
      .string()
      .required("Senha Obrigatório (a)")
      .min(6, "Deve ter no mínimo 6 caracteres"),
  })
  .required();

export const Form = (props: URLAxios) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
    axios
      .post(props.url, {
        name: data?.name,
        password: data?.password,
      })
      .then(function (response) {
        console.log(response, "success");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Cadastro realizado com sucesso!",
        });
      })
      .catch(function (error) {
        console.log(error, "error");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Cadastro não realizado!",
        });
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputMainSC
          {...register("name")}
          name="name"
          type="text"
          placeholder="Nome"
        />
        <ParagraphSC>{errors.name?.message}</ParagraphSC>

        <InputMainSC
          type="number"
          {...register("password", { pattern: /[\D]/g })}
          name="password"
          placeholder="Senha"
        />
        <ParagraphSC>{errors.password?.message}</ParagraphSC>
        <DivSC>
          <InputSC type="submit" />
          <Link className="effect" to="/login">
            <ParagraphLinkSC>Login</ParagraphLinkSC>
          </Link>
        </DivSC>
      </form>
    </>
  );
};
