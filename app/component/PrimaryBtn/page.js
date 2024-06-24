export default function PrimaryBtn({ label }) {
  return (
    <div>
      <button className="p-2 text-lg font-medium bg-primary text-[#fff] hover:text-[#000] hover:bg-transparent border border-[#000]  transition duration-500 ease-in-out">
        {label}
      </button>
    </div>
  );
}
