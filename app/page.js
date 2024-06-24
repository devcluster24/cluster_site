import Blog from "./component/Blog/page";
import GetinTouch from "./component/GetInTouch/page";
import Hero from "./component/Hero/page";
import Portfolio from "./component/Portfolio/page";
import Service from "./component/Services/page";
import TechStuck from "./component/TechStuck/page";
import WeOffer from "./component/WeOffer/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mt-10 bg-background">
      <Hero />
      <Service />
      <TechStuck />
      <WeOffer />
      <Portfolio />
      <Blog />
      <GetinTouch />
    </main>
  );
}
