function FeedBackCard({ photo, name, title, text }) {
  return ( 
    <>
      <div className="flex flex-col gap-3 p-[30px] bg-[#191919] w-[350px] h-[300px] text-white rounded-3xl hover:scale-101 transition-all duration-300 hover:shadow-2xl cursor-pointer">

        <div className="flex gap-2">
          <img src={photo} alt="dont work" className="rounded-full w-[74px] object-cover" />

          <div>
            <h2 className="font-bold">{name}</h2>
            <h3 className="opacity-80">{title}</h3>
            <span>⭐⭐⭐⭐⭐</span>
          </div>

        </div>

        <p className="max-w-[300px] opacity-90">{text}</p>

      </div>
    </>
  )
}
export default FeedBackCard