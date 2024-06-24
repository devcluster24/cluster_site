export default function GetinTouch() {
  return (
    <>
      <div
        id="contact"
        className="grid grid-cols-1 md:grid-cols-2 justify-center items-center pb-20 getinTouch-bg md:gap-14"
      >
        <div className="space-y-5 max-w-md p-5">
          <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-[#202647] font-black  text-center  mx-auto lg:mx-0">
            Get In Touch
          </h1>
          <p className="text-text font-sans text-[14px] md:text-[16px] 2xl:text-lg mx-auto lg:mx-0 text-center mb-8 xl:mb-12 font-semibold">
            We are headquartered in Dhaka, Bangladesh. Send us your message and
            we shall get back to you soon.
          </p>
        </div>
        <div className="max-w-full md:max-w-3xl p-5">
          <form className="bg-transparent rounded px-4 md:px-8 pt-6 pb-8 mb-4 space-y-4 md:space-y-8 shadow-2xl">
            <div className="mb-4">
              <input
                className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
                id="username"
                type="text"
                placeholder="Full Name"
              />
              <hr className="text-primary" />
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

            <div className="flex items-center justify-center md:justify-between">
              <button className="border transition ease-in-out hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-4 md:px-5 py-2 flex items-center gap-1 mt-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
