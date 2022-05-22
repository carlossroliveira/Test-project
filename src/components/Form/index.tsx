import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { DivSC, InputMainSC, InputSC, ParagraphSC } from "./formStyles";
import Swal from "sweetalert2";

interface IFormInputs {
  name: string;
  job: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .required("Nome Obrigatório (a)")
      .min(3, "Deve ter no mínimo 3 caracteres"),
    job: yup
      .string()
      .required("Senha Obrigatório (a)")
      .min(6, "Deve ter no mínimo 6 caracteres"),
  })
  .required();

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  /* http://localhost:4000/user/cadaster */
  const onSubmit = (data: IFormInputs) => {
    axios
      .post("https://reqre", {
        name: data?.name,
        job: data?.job,
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
        <InputMainSC {...register("name")} name="name" type="text" placeholder="Nome"/>
        <ParagraphSC>{errors.name?.message}</ParagraphSC>

        <InputMainSC
          type="number"
          {...register("job", { pattern: /[\D]/g })}
          name="job"
          placeholder="Senha"
        />
        <ParagraphSC>{errors.job?.message}</ParagraphSC>
        <DivSC>
          <InputSC type="submit" />
        </DivSC>
      </form>
    </>
  );
};
