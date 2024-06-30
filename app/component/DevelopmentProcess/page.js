export default function DProcess({ item, customClass }) {
  // Check if item exists before rendering
  return item || customClass ? (
    <div
      className={`card p-5  border-l-[10px] border-t-[14px] bg-transparent ${customClass} md:h-[320px] `}
    >
      <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
        0 {item.id}
      </h1>
      <h3 className="text-black mt-5 mb-5 font-bold text-xl">{item.title}</h3>
      <p className=" font-medium text-[#6a6c72] text-justify text-sm">
        {item.description}
      </p>
    </div>
  ) : (
    <div>Loading.....</div>
  );
}
