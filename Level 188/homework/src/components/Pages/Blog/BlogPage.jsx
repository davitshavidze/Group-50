import BlogAdmin from "./BlogAdmin";
import BlogUser from "./BlogUser";

function BlogPage() {

  const current = JSON.parse(localStorage.getItem("Found"));


  return (
    <section className="w-full h-screen ">
      {
        current ? current.status === "Admin" ? <BlogAdmin /> : <BlogUser /> : <BlogUser />
      }
    </section>
  )
}

export default BlogPage