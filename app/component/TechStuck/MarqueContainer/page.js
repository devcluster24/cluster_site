import Marquee from "react-fast-marquee";
import Container1 from "../Container1";
import Container2 from "../Container2";

export default function MarqueContainer() {
  return (
    <div>
      <div className=" -rotate-3 flex flex-col max-w-full items-center justify-between">
        <Marquee speed={40}>
          <Container1 />
        </Marquee>
      </div>
      <div className=" -rotate-3   flex flex-col md:fle lg:flex-row items-center justify-between">
        <Marquee speed={100} direction="right">
          <Container2 />
        </Marquee>
      </div>
    </div>
  );
}
