export default function About() {
  return (
    <>
      <div className="bg-[#ff5400] w-full">
        <h2 className="text-white text-4xl font-bold text-center py-16 ">
          About Us
        </h2>
      </div>
      <div className="lg:flex px-[10%] lg:pt-24 md:pt-5">
        <div className="lg:w-1/2">
          <h2 className="text-primary">Image</h2>
        </div>
        <div className="lg:w-1/2">
          <h4 className="text-[#ff5400] font-semibold text-xl font-sans">
            About Us
          </h4>
          <h2 className="font-bold lg:text-4xl md:text-2xl text-xl lg:w-10/12 text-[#202647] pt-3">
            We are a boutique digital transformation consultancy and software
            development company
          </h2>
          <p className="text-text font-sans text-sm pt-10 w-11/12 text-justify">
            DevCluster is a unique Software development company who since its
            very beginnings in 2016 has fulfilled a niche in the rapidly growing
            IT industry. We have grown as a leader in offering intelligent
            software as well as IT solutions to small, medium and corporate
            businesses in a wide range of industry sectors. To date we have
            built a vast portfolio of loyal customers that depend on our
            expertise to conduct their core business functions..
          </p>
        </div>
      </div>

      <div className="pt-28 pb-20">
        <div className="text-center">
          <h4 className="text-[#ff5400] font-semibold text-xl">
            OUR CORE VALUES
          </h4>
          <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl  text-center text-[#202647] pt-3">
            Create Awesome Service <br /> With Our Tools
          </h2>
        </div>
        <div className="lg:flex  justify-center gap-16 px-[10%] text-center pt-14">
          <div className="shadow-md bg-[#f0fffc]  rounded-md bg-slate-50 py-5 lg:mb-0 mb-5">
            <div className="text-primary">Icon</div>
            <h4 className="pt-4 font-semibold text-xl text-[#3b3663]">
              HONESTY
            </h4>
            <p className="px-[10%] py-3 text-text text-sm font-sans text-justify">
              Honesty is measured in terms of the relationship of trust we have
              with our customers. Our proposals represent a breakthrough value
              proposition with an honest and fair charge for the work proposed
              presented in a clear and upfront manner.
            </p>
          </div>
          <div className=" shadow-md bg-[#f1eff8] rounded-md bg-slate-50 py-5 lg:mb-0 mb-5">
            <div className="text-primary">Icon</div>
            <h4 className="pt-4 font-semibold text-xl text-[#3b3663]">PRIDE</h4>
            <p className="px-[10%] py-3 text-text text-sm font-sans text-justify">
              Our team will always represent the pride we have in the quality
              and integrity of the work we do. We seek feedback from our clients
              and our people to ensure our processes and tools are the best
              possible to meet the values and standards of our Brand.
            </p>
          </div>
          <div className=" shadow-md bg-[#f8e1eb] rounded-md bg-slate-50 py-5 lg:mb-0 mb-5">
            <div className="text-primary">Icon</div>
            <h4 className="pt-4 font-semibold text-xl text-[#3b3663]">
              IMPROVEMENT
            </h4>
            <p className="px-[10%] py-3 text-text text-sm font-sans text-justify">
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
