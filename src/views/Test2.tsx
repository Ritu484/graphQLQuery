import React from 'react';
import { useForm } from 'react-hook-form';

const Test2: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input type="text" {...register("firstName")} />
      </label>
      <label>
        Last Name:
        <input type="text" {...register("lastName")} />
      </label>
      <label>
        Email:
        <input type="email" {...register("email")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test2;