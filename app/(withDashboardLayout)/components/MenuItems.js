import Link from "next/link";
import { MdContacts, MdOutlineDashboard, MdShoppingCart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export const MenuItems = [
  {
    key: "/",
    icon: <MdOutlineDashboard size={20} />,
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "/products",
    icon: <MdShoppingCart size={20} />,
    label: <Link href={"/dashboard/products"}>Products</Link>,
  },
  {
    key: "/testimonial",
    icon: <MdShoppingCart size={20} />,
    label: <Link href="/dashboard/testimonial">Testimonial</Link>,
  },
  {
    key: "/contact",
    icon: <MdContacts size={20} />,
    label: <Link href="/dashboard/contact">Contact</Link>,
  },
  {
    key: "/settings",
    icon: <IoMdSettings size={20} />,
    label: <Link href="/dashboard/settings">Settings</Link>,
  },
];
