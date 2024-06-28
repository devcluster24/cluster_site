export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full md:mt-20 ">
      {" "}
      <div className="loader">
        <svg>
          <rect></rect>
        </svg>
      </div>
    </div>
  );
}
