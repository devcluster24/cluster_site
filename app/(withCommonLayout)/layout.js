import Footer from "./component/Footer/page";
import Navbar from "./component/Navigation/page";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
