import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

function BlogAdmin() {
  const { register, handleSubmit, reset } = useForm();
  const [file, setFile] = useState("");
  const Inp = useRef("")

  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("Blogs");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            text: "Restaraunt Opening 15 January!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP-48_IUtWVT9BckGRVBxWTOeHnKqF71k1A&s",
          },
          {
            id: 2,
            text: "New Fish Dish!",
            img: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("Blogs", JSON.stringify(blogs));
  }, [blogs]);

  function blogAdd(data) {
    const newBlog = {
      id: blogs.length + 1,
      text: data.text,
      img: data.img,
    };

    setBlogs((prev) => [...prev, newBlog]);
    reset();
  }

  function blogRemove(id) {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  }

  return (
    <section className="h-screen w-full flex justify-center items-center flex-col gap-5">
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-5xl">Deploy Blogs As Admin Status!</h1>
        <p className="text-2xl opacity-75">Read out Posts and get discount!</p>

        <form
          onSubmit={handleSubmit(blogAdd)}
          className="flex gap-5 items-center"
        >
          <input
            type="text"
            {...register("text", { required: true })}
            className="rounded-2xl border p-1.5"
            placeholder="Enter Title"
          />

          <input
            type="text"
            {...register("img", { required: true })}
            className="rounded-2xl border p-1.5"
            placeholder="Enter URL"
          />

          <div>
            <input
              type="file"
              ref={Inp}
              className="hidden"
              onChange={(e) => {
                setFile(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
            />
            <i className="fa-solid fa-image text-3xl cursor-pointer" onClick={() => Inp.current.click()}></i>
          </div>

          <button
            type="submit"
            className="border rounded-2xl p-1 font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:text-white"
          >
            Add Blog
          </button>
        </form>
      </div>

      <div className="flex gap-5 flex-wrap ">
        {blogs.map((el) => (
          <div
            key={el.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <img
              src={el.img}
              alt="blog"
              className="w-full h-[200px] object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <span className="text-sm text-gray-500">Post #{el.id}</span>
              <h2 className="text-lg font-semibold">{el.text}</h2>

              <button
                className="border rounded-2xl hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300"
                onClick={() => {
                  blogRemove(el.id);
                }}
              >
                Delete Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogAdmin;
