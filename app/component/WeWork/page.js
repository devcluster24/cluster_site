export default function WeWork() {
  return (
    <div>
      <div className="Container grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-center items-center ">
        <div className=" space-y-5 col-span-1 mt-20">
          <h5 className="text-primary font-sans text-sm font-semibold">
            HOW WE WORKS
          </h5>
          <h1 className="text-[#202647] font-sans text-2xl lg:text-3xl font-bold">
            Our Strategic Approaches to Achieving Collaborative Success
          </h1>
          <p className="text-[#6a6c72] font-sans text-sm text-justify">
            Dev Cluster, collaborative success is at the core of our strategy.
            We prioritize agile software development to adapt and deliver
            iterative improvements swiftly. Regular communication through calls
            and meetings keeps all customers informed and aligned. Our
            commitment to best development practices ensures high performance
            and reliability with rigorous quality assurance and scalable
            solutions.
          </p>
        </div>
        <div className="col-span-2 lg:flex items-center justify-center lg:gap-5 lg:my-24 my-5">
          {/* Row 2 */}
          <div className=" lg:flex lg:flex-col gap-5 ">
            {/* Agile Software Development */}
            <div className="lg:h-[300px] lg:w-[280px] h-[250px] bg-[#f1eff8] shadow-sm p-4 mb-4 lg:mb-0 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center ">
              <h1 className="text-[#3b3663] font-sans text-xl lg:text-2xl font-bold my-3 ">
                Iterative Development
              </h1>
              <p className="text-[#6a6c72] text-sm font-sans">
                Iterative development at Dev Cluster ensures adaptive,
                high-quality progress through continuous feedback and phased
                enhancements.
              </p>
            </div>
            {/* Best Development Practices */}
            <div className="lg:h-[280px] lg:w-[280px] h-[250px] bg-[#f0fffc] shadow-sm p-4 mb-4 lg:mb-0 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
              <h1 className="text-[#3b3663] font-sans text-xl lg:text-2xl  font-bold my-3">
                Communication Hub
              </h1>
              <p className="text-[#6a6c72] text-sm font-sans">
                Our communication hub fosters alignment and transparency through
                scheduled updates and collaborative discussions, ensuring
                clarity and efficiency in our operations.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div>
            <div className=" lg:flex lg:flex-col lg:gap-5 lg:translate-y-10">
              {/*  Regular calls and meetings */}
              <div className="lg:h-[280px] lg:w-[280px] h-[250px] bg-[#fbe6d4] shadow-sm p-4 mb-4 lg:mb-0 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
                <h1 className="text-[#3b3663] font-sans text-xl lg:text-2xl  font-bold my-3">
                  Quality Assurance
                </h1>
                <p className="text-[#6a6c72] text-sm font-sans">
                  Quality assurance ensures rigorous testing and validation at
                  Dev Cluster, maintaining high standards and product
                  reliability consistently.
                </p>
              </div>
              {/*  High Personal Involvement */}
              <div className="lg:h-[300px] lg:w-[280px] h-[250px] bg-[#f8e1eb] shadow-sm p-4 mb-4 lg:mb-0 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
                <h1 className="text-[#3b3663] font-sans text-xl lg:text-2xl  font-bold my-3">
                  Dedicated Teams
                </h1>
                <p className="text-[#6a6c72] text-sm font-sans">
                  Dedicated teams at our company are fully committed to project
                  success, fostering collaboration, and achieving exceptional
                  outcomes together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
