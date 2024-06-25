import PrimaryBtn from "../PrimaryBtn/page";

export default function WeWork() {
  return (
    <div>
      <div className="Container grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center">
        <div className=" space-y-5 col-span-1">
          <h5 className="text-primary font-sans text-sm font-semibold">
            HOW WE WORKS
          </h5>
          <h1 className="text-[#202647] font-sans text-4xl font-bold">
            Solve Business Challenges With Us
          </h1>
          <p className="text-[#6a6c72] font-sans text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            libero architecto labore qui autem, maiores rerum, accusantium
            voluptatem quisquam quis ea? Saepe ipsa ratione qui autem, tempore
            dolorem ab sint fugiat expedita natus reiciendis cum ea maiores
            repellat, distinctio sit voluptatibus excepturi? Quidem, alias illo
            quisquam eius recusandae quo id.
          </p>
          <PrimaryBtn label={"More Details"} />
        </div>
        <div className="col-span-2 lg:flex items-center justify-center gap-5 my-24">
          {/* Row 2 */}
          <div className=" lg:flex lg:flex-col gap-5 ">
            {/* Agile Software Development */}
            <div className="h-[300px] w-[280px] bg-[#f1eff8] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center ">
              <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3 ">
                Agile Software Development
              </h1>
              <p className="text-[#6a6c72] text-sm font-sans">
                All of our teams follow Scrum methodology, which has proven to
                give great results and keep all the project stakeholders in
                sync.
              </p>
            </div>
            {/* Best Development Practices */}
            <div className="h-[280px] w-[280px] bg-[#f0fffc] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
              <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3">
                Best Development Practices
              </h1>
              <p className="text-[#6a6c72] text-sm font-sans">
                With us, you can rely on a stable demo environment, adept QA and
                testing, always accessible and secure code, and fast deploying.
              </p>
            </div>
          </div>
          {/* Row 3 */}
          <div>
            <div className=" lg:flex lg:flex-col gap-5 lg:translate-y-10">
              {/*  Regular calls and meetings */}
              <div className="h-[280px] w-[280px] bg-[#fbe6d4] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
                <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3">
                  Regular calls and meetings
                </h1>
                <p className="text-[#6a6c72] text-sm font-sans">
                  One of our top priorities is quick reaction time and
                  accessibility. Our team is always a phone call, skype call or
                  email away
                </p>
              </div>
              {/*  High Personal Involvement */}
              <div className="h-[300px] w-[280px] bg-[#f8e1eb] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
                <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3">
                  High Personal Involvement
                </h1>
                <p className="text-[#6a6c72] text-sm font-sans">
                  From leadership to teams on the ground, we’re all genuinely
                  passionate about what we do and are always striving to be
                  leaders in our field, instead of just keeping up. For us, the
                  client’s success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
