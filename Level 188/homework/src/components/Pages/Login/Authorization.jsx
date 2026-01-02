import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

function Authorization() {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  if (!localStorage.getItem("admins")) {
    const admins = [
      {
        email: "datoshavidze74@gmail.com",
        money: 100000,
        name: "Davit Shavidze",
        password: "dato20091212",
        status: "Admin",
      },
    ];

    localStorage.setItem("admins", JSON.stringify(admins));
  }

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-2 bg-blue-50 rounded-2xl p-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-bold text-blue-500 text-4xl mb-2">Sign In</h2>
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
              const admins = JSON.parse(localStorage.getItem("admins")) || [];

              const existingUsers =
                JSON.parse(localStorage.getItem("userData")) || [];

              const foundAdmin = admins.find(
                (admin) =>
                  admin.email === data.email && admin.password === data.password
              );

              if (foundAdmin) {
                localStorage.setItem(
                  "Found",
                  JSON.stringify(foundAdmin)
                );
                navigation("/");
                return;
              }

              const foundUser = existingUsers.find(
                (user) => user.email === data.email
              );

              if (!foundUser) {
                setError("email", {
                  type: "custom",
                  message: "No account found with this email!",
                });
                return;
              }

              if (foundUser.password !== data.password) {
                setError("password", {
                  type: "custom",
                  message: "Incorrect password!",
                });
                return;
              }

              localStorage.setItem(
                "Found",
                JSON.stringify({ ...foundUser, role: "User" })
              );
              navigation("/");
            })}
          >
            <input
              type="text"
              placeholder="Email"
              className="placeholder:opacity-50 border-2 rounded-2xl p-2 focus:border-blue-600 focus:outline-none placeholder:font-semibold transition-all duration-300"
              {...register("email", {
                required: "Value is Required!",
              })}
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

            <div className="flex flex-col justify-start gap-3 mt-4">
              <input
                type="submit"
                className="bg-[#3461FD] rounded-2xl text-white p-1.5 font-semibold hover:bg-gray-900 transition-all duration-300 cursor-pointer w-full"
              />

              <span>
                Dont have account?{" "}
                <Link to="/Register">
                  <b className="text-blue-500 font-medium cursor-pointer hover:text-blue-800 transition-all duration-300">
                    Sign Up
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

export default Authorization;
