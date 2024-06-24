export default function GradientText({ title, style }) {
  return (
    <h1
      className={`text-[25px] md:text-[50px] font-extrabold   mr-32  bg-[length:200%_200%] text-transparent bg-clip-text animate-gradient ${style}`}
    >
      {title}
    </h1>
  );
}
