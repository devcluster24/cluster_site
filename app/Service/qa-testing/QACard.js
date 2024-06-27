export default function QACard({
  title,
  description,
  buttonText,
  icon,
  style,
}) {
  return (
    <div>
      <div className=" p-5  space-y-3  mb-10  border  rounded-lg shadow-md   md:h-[250px]  border-border lg:w-[450px] lg:h-[250px] ">
        <div className="text-5xl w-16 h-16 flex justify-center items-center bg-primary p-5 rounded-full text-[#FFF] shadow-2xl shadow-primary ">
          {icon}
        </div>

        <h1 className="text-[28px] text-primary font-bold">{title}</h1>
        <p className=" text-text text-base text-pretty pb-5">{description}</p>
      </div>
    </div>
  );
}
