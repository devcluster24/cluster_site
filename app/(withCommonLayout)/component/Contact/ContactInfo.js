export const ContactInfo = ({ icon, title, details }) => (
  <div className="lg:w-[350px] lg:h-[180px] flex items-center gap-5 border border-border p-10 rounded-md shadow-lg mt-10 group">
    <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
      {icon}
    </div>
    <div className="text-text text-sm space-y-2">
      <h1 className="font-bold text-[#000] text-xl">{title}</h1>
      {details.map((detail, index) => (
        <p key={index}>{detail}</p>
      ))}
    </div>
  </div>
);
