/*import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  confirmedPassword: string;
};

const MyForm = () => {
  const { register, handleSubmit } useForm<Inputs>();
    
    const onSubmit = (data: any) => {
      console.log(data);
    };

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { require: true, maxLeagth: 20 })} />
      <input {...register("password")} />
      <input {...register("confirmedPassword")} />
      <input type="submit" />
    </form>
    );
};

export default MyForm;
*/