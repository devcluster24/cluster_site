export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
      {" "}
      <div className="loader">
        <svg>
          <rect></rect>
        </svg>
      </div>
    </div>
  );
}
