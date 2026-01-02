function Advertise() {
  return (
    <>
      <section className="w-full min-h-[70vh] text-center flex flex-col gap-5">
        <div>
          <h1 className="text-5xl font-bold">Why We are Best Food Maker</h1>
          <p className="opacity-60 font-semibold mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br /> scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <div>
            <p className="opacity-80 font-semibold text-center mb-5">
              It is a long established fact that a reader will be distracted
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              English. <br /> Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions<br /> have evolved over the years, sometimes by
              accident, sometimes on purpose It is a long established fact that
              a reader will be distracted by the readable <br /> content of a page when
              looking at its layout. The normal distribution of letters, as
              opposed to using 'Content <br /> Many desktop publishing packages and web
              page editors search for 'lorem ipsum' will uncover many web sites
              still in humour and the like. Read More
            </p>
          </div>

          <video autoPlay muted loop>
            <source src="./kitchen.mp4"/>
          </video>
        </div>
      </section>
    </>
  );
}

export default Advertise;
