import GradientText from "../GradientText/page";
const stucklist = [
  {
    id: 1,
    text: "Next Js",
    style: "bg-gradient-animation1",
  },
  {
    id: 2,
    text: "Express Js",
    style: "bg-gradient-animation2",
  },
  {
    id: 3,
    text: "JavaScript",
    style: "bg-gradient-animation3",
  },
  {
    id: 4,
    text: "Tailwind Css",
    style: "bg-gradient-animation4",
  },
  {
    id: 5,
    text: "Node Js",
    style: "bg-gradient-animation5",
  },
  {
    id: 5,
    text: "React Js",
    style: "bg-gradient-animation6",
  },
  {
    id: 5,
    text: "VueJs",
    style: "bg-gradient-animation7",
  },
  {
    id: 5,
    text: "AWS",
    style: "bg-gradient-animation8",
  },
  {
    id: 5,
    text: "PHP",
    style: "bg-gradient-animation9",
  },
  {
    id: 5,
    text: "Django",
    style: "bg-gradient-animation10",
  },
];

export default function Container1() {
  return (
    <div className="mt-10  flex  ">
      {stucklist.map((item) => (
        <GradientText key={item.id} title={item.text} style={item.style} />
      ))}
    </div>
  );
}
