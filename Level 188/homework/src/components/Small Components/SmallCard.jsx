function SmallCard( {title, text, img} ) {
  return (
    <>
      <div className="flex flex-col gap-5 w-[300px] h-[440px] text-center border rounded-2xl p-4 mt-15">
        <img src={img} alt="dont work" className="rounded-2xl" />
        <h2 className="text-3xl font-medium">{title}</h2>

        <p className="opacity-80">{text}</p>
      </div>
    </>
  )
}

export default SmallCard