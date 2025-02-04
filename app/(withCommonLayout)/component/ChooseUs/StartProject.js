const StartProject = () => {
  return (
    <div className="bg-[#f0fffc] w-full lg:flex gap-10 items-center justify-center py-10 lg:py-20">
      <h1 className="text-[#202647] font-semibold  text-center lg:text-[30px]">
        Have an Exciting Project in Mind? Let&apos;s Discuss!
      </h1>
      <div className="text-center  py-3">
        <a
          className="text-primary hover:bg-primary hover:text-white ease-in-out transition-all duration-300  font-medium text-sm lg:text-[20px]  border border-primary text-center px-6 py-1 rounded-md"
          href="/quote"
        >
          START PROJECT
        </a>
      </div>
    </div>
  );
};

export default StartProject;
