import GradientText from "../GradientText/page";
const stucklist = [
  {
    id: 1,
    text: "Next Js",
    style: "bg-gradient-animation11",
  },
  {
    id: 2,
    text: "Express Js",
    style: "bg-gradient-animation12",
  },
  {
    id: 3,
    text: "JavaScript",
    style: "bg-gradient-animation13",
  },
  {
    id: 4,
    text: "Tailwind Css",
    style: "bg-gradient-animation14",
  },
  {
    id: 5,
    text: "Node Js",
    style: "bg-gradient-animation15",
  },
  {
    id: 5,
    text: "React Js",
    style: "bg-gradient-animation16",
  },
  {
    id: 5,
    text: "VueJs",
    style: "bg-gradient-animation17",
  },
  {
    id: 5,
    text: "AWS",
    style: "bg-gradient-animation18",
  },
  {
    id: 5,
    text: "PHP",
    style: "bg-gradient-animation19",
  },
  {
    id: 5,
    text: "Django",
    style: "bg-gradient-animation20",
  },
];

export default function Container2() {
  return (
    <div className="mt-10  flex  ">
      {stucklist.map((item) => (
        <GradientText key={item.id} title={item.text} style={item.style} />
      ))}
    </div>
  );
}
