import ChooseUs from "./component/ChooseUs/page";
import StartProject from "./component/ChooseUs/StartProject";
import Hero from "./component/Hero/page";
import LatestProducts from "./component/Products/LatestProducts";
import Service from "./component/Services/page";
import WeWork from "./component/WeWork/page";
import Who from "./component/Who/Page";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center mt-10 bg-background ">
      <Hero />
      <WeWork />
      <Service />
      <Who />
      <ChooseUs />
      <LatestProducts />
      <StartProject />
    </main>
  );
}
