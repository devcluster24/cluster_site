export default function PrimaryBtn({ label }) {
  return (
    <div>
      <button className="px-5 py-2 text-[15px] font-medium bg-primary text-[#fff]  hover:bg-transparent border border-primary rounded-2xl hover:text-primary transition duration-500 ease-in-out inline">
        {label}
      </button>
    </div>
  );
}
