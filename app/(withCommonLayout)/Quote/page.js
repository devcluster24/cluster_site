export default function page() {
  return (
    <div className="pt-20  bg-[#f6f5fb]">
      <div>
        <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
          Quote Us
        </h2>
      </div>
      <div className="w-full p-5 pt-20 flex justify-center items-center">
        <form className=" rounded px-4 md:px-8 pt-6 pb-8 mb-4 space-y-4 md:space-y-8 shadow-2xl border border-border bg-white">
          <h1 className="text-text font-bold text-center text-2xl">
            Get a Quote
          </h1>
          <div className="mb-4 lg:flex gap-10">
            <div>
              <input
                className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
                id="username"
                type="text"
                placeholder="Full Name"
              />
              <hr className="text-primary" />
            </div>
            <div>
              <input
                className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
                id="username"
                type="text"
                placeholder="Full Name"
              />
              <hr className="text-primary" />
            </div>
          </div>
          <div className="mb-4">
            <input
              className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
              id="username"
              type="text"
              placeholder="Phone Number"
            />
            <hr className="text-primary" />
          </div>
          <div className="mb-4">
            <textarea
              rows={4}
              className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
              id="username"
              type=""
              placeholder="Your Text"
            />
            <hr className="text-primary" />
          </div>

          <div className="flex items-center justify-center md:justify-between ">
            <button className="border transition ease-in-out hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-4 md:px-5 py-2 flex items-center gap-1 mt-2 text-center">
              Send Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
