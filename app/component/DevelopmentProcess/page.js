export default function DProcess({ item, customClass }) {
  // Check if item exists before rendering
  return item || customClass ? (
    <div
      className={`card p-5  border-l-[10px] border-t-[14px] bg-transparent ${customClass} md:h-[450px]`}
    >
      <h1 className="text-black pb-5 text-xl font-bold">0 {item.id}</h1>
      <h3 className="text-black mt-5 mb-5 font-bold text-xl">{item.title}</h3>
      <p className="text-text font-medium">{item.description}</p>
    </div>
  ) : (
    <div>Loading.....</div>
  );
}
