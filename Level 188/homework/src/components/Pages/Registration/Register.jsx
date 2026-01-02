import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Register() {
  const navigation = useNavigate()
  const [success, setSuccess] = useState("")
  const { register, handleSubmit, formState: { errors }, setError } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-2 bg-blue-50 rounded-2xl p-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-bold text-blue-500 text-4xl">Sign Up</h2>
            <p className="opacity-55">Sign up with comfort</p>
          </div>

          <div className="flex gap-3 justify-center">
            <div className="flex gap-2 justify-center items-center bg-gray-50 p-2 rounded-2xl hover:bg-[#e5e7eb62] transition-all duration-300 cursor-pointer">
              <i className="fa-brands fa-square-facebook text-blue-600 text-2xl"></i>
              <span className="text-gray-700 text-lg font-medium">
                Facebook
              </span>
            </div>

            <div className="flex gap-2 justify-center items-center bg-gray-50 rounded-2xl p-2 hover:bg-[#e5e7eb62] transition-all duration-300 cursor-pointer">
              <i className="fa-brands fa-square-google-plus text-2xl"></i>
              <span className="text-gray-700 text-lg font-medium">Google</span>
            </div>
          </div>

          <img src="./public/line.png" alt="photo" className="w-[345px] m-1" />

          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit((data) => {
              const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

              const emailUsed = existingUsers ? existingUsers.find(user => user.email === data.email) : undefined;

              if (emailUsed) {
                setError("email", {
                  type: "custom",
                  message: "This Email Is Already Registered!",
                });

                return;
              }

              data.money = 100;
              data.status = "User";
              data.cart = []

              existingUsers.push(data);
              localStorage.setItem("userData", JSON.stringify(existingUsers));
              console.log(data);

              setSuccess("User Registered Succesfully!");

              setTimeout(() => {
                setSuccess("");

                navigation("/Login")
              }, 1000)
            })}
          >
            <input
              type="text"
              placeholder="Name"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-blue-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("name", { required: "Value is Required!", maxLength: {value: 20, message: "Max length 20 symbols"} })}
            />

            <p className="text-red-500 font-semibold">
              {errors?.name?.message}
            </p>

            <input
              type="text"
              placeholder="Email"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-blue-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("email", { required: "Value is Required!", validate: (value) => value.endsWith("@gmail.com") || "Invalid Email!" })}
            />

            <p className="text-red-500 font-semibold">
              {errors?.email?.message}
            </p>

            <input
              type="password"
              placeholder="Password"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-blue-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("password", {
                required: "Value is Required!",
                minLength: {
                  value: 6,
                  message: "Min length should be 6 letters!",
                },
              })}
            />
            <p className="text-red-500 font-semibold">
              {errors?.password?.message}
            </p>

            {success ? 
              <p className="text-green-600 font-semibold text-center mt-1"> {success} </p> 
            : ""}

            <div className="flex flex-col justify-start gap-3 mt-4">
              <input
                type="submit"
                className="bg-[#3461FD] rounded-2xl text-white p-1.5 font-semibold hover:bg-gray-900 transition-al duration-300 cursor-pointer w-full"
              />

              <span>
                Do you have account?{" "}
                <Link to="/Login">
                  <b className="text-blue-500 font-medium cursor-pointer hover:text-blue-800 transition-all duration-300">
                    Sign In
                  </b>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
