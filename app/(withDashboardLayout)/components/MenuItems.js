import Link from "next/link";
import { MdShoppingCart, MdSlideshow } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";

export const MenuItems = [
  {
    key: "/products",
    icon: <MdShoppingCart size={20} />,
    label: <Link href={"/dashboard/products"}>Products</Link>,
  },
  {
    key: "/testimonial",
    icon: <MdShoppingCart size={20} />,
    label: "Testimonial",
  },
  {
    key: "/contact",
    icon: <MdSlideshow size={20} />,
    label: <Link href="/dashboard/contact">Carousel</Link>,
  },
  {
    key: "/settings",
    icon: <MdShoppingCart size={20} />,
    label: "Settings",
  },
];
