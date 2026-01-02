import { useState } from "react";
function BlogUser() {
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("Blogs");
    return saved ? JSON.parse(saved) : [
          {
            id: 1,
            text: "Hello world!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP-48_IUtWVT9BckGRVBxWTOeHnKqF71k1A&s",
          },
          {
            id: 2,
            text: "New Dish!",
            img: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
          },
        ];
  });
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col gap-5">
      <h1 className="text-5xl">Welcome to out Restaraunt Blogs!</h1>
      <h3 className="text-2xl opacity-75">Subscribe to see all posts!</h3>
      <div className="flex gap-5">
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogUser;
