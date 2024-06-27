const PageTitleArea = ({ title, btnText, description }) => {
  return (
    <div
      className="relative z-10 pt-[130px] pb-[80px] overflow-hidden"
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/pageTitleArea.jpg')",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(50%)", // Adjust the brightness as needed
          filter: "blur(5px)",
          zIndex: -1,
        }}
      />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  justify-center items-center px-10 mt-10">
        <div className="flex flex-col items-center md:flex-none">
          <h1 className="text-4xl font-bold text-[#fff]">{title}</h1>
          <a
            href="/Quote"
            className="mt-5 border border-border py-1 px-4 rounded-md font-semibold bg-primary text-[#fff]  duration-200 ease-in-out hover:scale-125 "
          >
            {btnText}
          </a>
        </div>
        <div className="hidden md:flex ">
          <p className="text-xl font-medium text-[#fff] border-primary border-l-4 pl-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitleArea;
