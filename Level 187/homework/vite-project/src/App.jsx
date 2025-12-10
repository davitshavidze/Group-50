import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors.password);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className="flex flex-col border p-5 rounded-4xl gap-3"
        >
          <div>
            <label>Enter your Full name: </label>
            <input
              type="text"
              {...register("fullName", { required: "This is required!" })}
            />
            <p className="text-red-500">{errors?.fullName?.message}</p>
          </div>

          <div>
            <label>Enter your password: </label>
            <input
              type="text"
              {...register("password", {
                required: "This is required!",
                minLength: { value: 6, message: "Minimal length should be 6!" },
              })}
            />
            <p className="text-red-500">{errors?.password?.message}</p>
          </div>

          <input
            type="submit"
            className="bg-gray-900 text-white rounded-4xl font-bold cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-300 hover:border hover:border-gray-900"
          />
        </form>
      </div>
    </>
  );
}

export default App;
