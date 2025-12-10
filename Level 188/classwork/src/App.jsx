import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      password: "",
    },
  });

  const firstName = watch("firstName");
  const age = watch("age");
  const lastName = watch("lastName");
  const password = watch("password");

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="flex flex-col border p-5 rounded-4xl gap-3"
        >
          <div>
            <label>Enter your First Name: </label>
            <input
              type="text"
              {...register("firstName", { required: "Value is required!" })}
              className="focus:outline-0"
            />

            <p className="text-red-500">{errors?.firstName?.message}</p>
          </div>

          <div>
            <label>Enter your Last Name: </label>
            <input
              type="text"
              {...register("lastName", { required: "Value is required!" })}
              className="focus:outline-0"
            />

            <p className="text-red-500">{errors?.lastName?.message}</p>
          </div>

          <div>
            <label>Enter your Age: </label>
            <input
              type="text"
              {...register("age", { required: "Value is required!" })}
              className="focus:outline-0"
            />

            <p className="text-red-500">{errors?.age?.message}</p>
          </div>

          <div>
            <label>Enter your Password: </label>
            <input
              type="text"
              {...register("password", {
                required: "Value is required!",
                minLength: {
                  value: 6,
                  message: "Min Length should be 6 letters",
                },
              })}
              className="focus:outline-0"
            />

            
          </div>

          <input
            type="submit"
            className="bg-gray-900 text-white rounded-4xl font-bold cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300 hover:border hover:border-gray-900"
          />
        </form>

        <div className="flex flex-col gap-1 border p-5 rounded-4xl w-[383px] justify-center">
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Age: {age}</p>
          <p>Password: {password}</p>
        </div>
      </div>
    </>
  );
}

export default App;