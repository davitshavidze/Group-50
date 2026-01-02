function Quality() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col gap-16 px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mt-15">
        We believe in making quality food
      </h2>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-3xl md:text-5xl font-bold">2M+</h3>
          <span className="opacity-80 font-bold">Happy Customers</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-3xl md:text-5xl font-bold">98%</h3>
          <span className="opacity-80 font-bold">Customer Satisfaction</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-3xl md:text-5xl font-bold">20+</h3>
          <span className="opacity-80 font-bold">Our Branches</span>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-3xl md:text-5xl font-bold">100+</h3>
          <span className="opacity-80 font-bold">Total Employees</span>
        </div>
      </div>

      <div className="text-center flex flex-col gap-6 max-w-4xl mx-auto">
        <h2 className="font-bold text-2xl md:text-5xl">
          Start The Adventure Today And <br /> Become a Franchisee
        </h2>

        <p className="text-md md:text-lg opacity-85 mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
}

export default Quality;
