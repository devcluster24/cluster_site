export default function Who() {
  return (
    <>
      <div className="Container lg:grid grid-cols-2 justify-center items-center px-[10%] lg:pt-24 md:pt-5 gap-10">
        <div className="flex gap-1 lg:block  lg:text-end  border-r-2 border-primary pr-2 ">
          <h1 className="lg:text-6xl text-primary font-sans font-bold">WHO</h1>
          <h1 className="lg:text-6xl text-[#202647] font-sans font-bold">WE</h1>
          <h1 className="lg:text-6xl text-[#202647] font-sans font-bold">
            ARE
          </h1>
        </div>
        <div>
          <p
            className="text-text font-sans text-sm pt-5 lg:pt-10 w-11/12 
         text-justify"
          >
            Dev Cluster stands out as a premier software development and testing
            service provider, supported by a talented team of software
            engineers. We excel in creating impactful web, desktop, and mobile
            applications tailored to our clients diverse needs.
            <br />
            Since our inception, we have forged valuable partnerships with
            numerous companies, bringing tangible operational improvements to
            startups, emerging enterprises, and established organizations across
            Bangladesh and India.
          </p>
        </div>
      </div>

      <div className=" pt-10 lg:pt-28 pb-20 container">
        <div className="text-center">
          <h4 className="text-[#ff5400] font-semibold text-xl">
            OUR CORE VALUES
          </h4>
          <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl  text-center text-[#202647] pt-3">
            Create Awesome Service <br /> With Our Tools
          </h2>
        </div>
        <div className="lg:flex  justify-center gap-16 px-4 lg:px-[10%] text-center pt-14 ">
          <div className="shadow-md bg-[#f0fffc]  rounded-md  py-5 lg:mb-0 mb-5 lg:h-[280px]">
            <div className="text-primary">Icon</div>
            <h4 className="pt-4 font-sans font-semibold text-xl text-[#3b3663]">
              HONESTY
            </h4>
            <p className="px-[10%] py-3 text-text text-sm font-sans text-justify">
              Honesty is measured in terms of the relationship of trust we have
              with our customers. Our proposals represent a breakthrough value
              proposition with an honest and fair charge for the work proposed
              presented in a clear and upfront manner.
            </p>
          </div>
          <div className=" shadow-md bg-[#f1eff8] rounded-md  py-5 lg:mb-0 mb-5 lg:h-[280px]">
            <div className="text-primary">Icon</div>
            <h4 className="pt-4 font-sans font-semibold text-xl text-[#3b3663]">
              PRIDE
            </h4>
            <p className="px-4 lg:px-[10%] py-3 text-text text-sm font-sans text-justify">
              Our team will always represent the pride we have in the quality
              and integrity of the work we do. We seek feedback from our clients
              and our people to ensure our processes and tools are the best
              possible to meet the values and standards of our Brand.
            </p>
          </div>
          <div className=" shadow-md bg-[#f8e1eb] rounded-md bg-slate-50 pt-5  lg:mb-5 lg:h-[280px]">
            <div className="text-primary">Icon</div>
            <h4 className="pt-4 font-sans font-semibold text-xl text-[#3b3663]">
              IMPROVEMENT
            </h4>
            <p className="px-4 lg:px-[10%] py-3 text-text text-sm font-sans text-justify">
              DevCluster is a quality focused organization underpinned by a
              process of Continuous Improvement. All our processes are completed
              with a final review step where we will reflect on the task
              completed and measure the quality of our output.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
