function Contact() {
  function submit(){
    alert("Form was submitted succesfully >3")
  }

  return (
    <div className="bg-gray-100 w-full h-[90vh] flex justify-center items-center flex-col">
      <form className="w-[500px] flex flex-col border-2 border-black justify-center items-center p-3 rounded-2xl bg-gray-500 text-white font-bold text-[22px]" onSubmit={submit}>
        <label>Enter your name: </label>
        <input type="text" className="w-[200px] border-2 border-black rounded text-center"/>

        <label>Enter your age: </label>
        <input type="text" className="w-[200px] border-2 border-black rounded text-center"/>

        <label>Enter your password: </label>
        <input type="text" className="w-[200px] border-2 border-black rounded text-center"/>

        <input type="submit" className="border-2 p-0.5 bg-gray-900 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded mt-2" />
      </form>
    </div>
  );
}

export default Contact;
