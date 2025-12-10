import * as React from "react";
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, formState: {errors}, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });

  console.log(errors.lastName);
  console.log(watch('firstName'))

  const firstName = watch('FirstName')

  return (
    <>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}>
        <input type="text" {...register("firstName", {required: 'This is Required'})} placeholder="First Name" />
        <input type="text" {...register("lastName", {required: 'This is Required', minLength: {value: 4, message: 'Min Length should be 4 letters'}})} placeholder="Last Name" />
        <p>{errors?.lastName?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;