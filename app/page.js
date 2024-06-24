import GetinTouch from "./component/GetInTouch/page";
import Hero from "./component/Hero/page";
import Service from "./component/Services/page";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center mt-10 bg-background">
      <Hero />
      <Service />
      <GetinTouch />
    </main>
  );
}
