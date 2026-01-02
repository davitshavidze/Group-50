import FeedBackCard from "../../Small Components/FeedBackCard";

function FeedBack() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col justify-center items-center mb-10 gap-10 px-4">
      <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
        What Our Clients Are Saying
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full place-items-center">
        <FeedBackCard
          photo="/user1.png"
          name="Michal Gun"
          title="Head of sales at Tesla"
          text="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
        />

        <FeedBackCard
          photo="/user2.png"
          name="Aleena White"
          title="Accountant of Ozone"
          text="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
        />

        <FeedBackCard
          photo="/user3.png"
          name="Cries Lee"
          title="CEO Of Montee"
          text="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
        />

        <FeedBackCard
          photo="https://people.com/thmb/gzHtG_UnZBsUuHVJx9xjB5yAfIQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/people-headshot-nick-maslow-f21ef38676504bc89a091ec9a5c95e4b.jpg"
          name="Michal Gun"
          title="Gucci Headquarter"
          text="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
        />
        <FeedBackCard
          photo="https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg?semt=ais_hybrid&w=740&q=80"
          name="Aleena White"
          title="Twitter OPS Manager"
          text="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
        />
        <FeedBackCard
          photo="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
          name="Michal Gun"
          title="MC.Director"
          text="There are many variatioof passages of Lorem Ipsum ava but the majority If you are going to use a passage of Lorem Ipsum, you need tasure there isn't anything embarrassinhidden in believable."
        />
      </div>
    </section>
  );
}

export default FeedBack;
