import QuoteRequestForm from "../component/GetInTouch/quote-request-form";

export default function page() {
  return (
    <div className="pt-20  bg-[#f6f5fb]">
      <div>
        <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
          Quote Us
        </h2>
      </div>
      <div className="w-full p-5 pt-20 flex justify-center items-center">
        <QuoteRequestForm />
      </div>
    </div>
  );
}
