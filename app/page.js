import About from "./component/About/Page";
import ChooseUs from "./component/ChooseUs/page";
import Hero from "./component/Hero/page";
import Service from "./component/Services/page";
import WeWork from "./component/WeWork/page";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center mt-10 bg-background ">
      <Hero />
      <WeWork />
      <Service />
      <About />
      <ChooseUs />
    </main>
  );
}
