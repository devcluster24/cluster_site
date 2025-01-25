import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import {
  MdAddChart,
  MdContacts,
  MdLayers,
  MdMenuBook,
  MdOutlineDashboard,
  MdShoppingCart,
  MdSlideshow,
} from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";

export const MenuItems = [
  {
    key: "/",
    icon: <MdOutlineDashboard size={20} />,
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "/carousel",
    icon: <MdSlideshow size={20} />,
    label: <Link href="/dashboard/carousel">Carousel</Link>,
  },
  {
    key: "/users",
    icon: <FaUsers size={20} />,
    label: <Link href="/dashboard/users">Users</Link>,
  },
  {
    key: "/products",
    icon: <MdShoppingCart size={20} />,
    label: "Our Products",
    children: [
      {
        key: "/product",
        icon: <MdShoppingCart size={20} />,
        label: <Link href="/dashboard/products">Product</Link>,
      },
      {
        key: "/products/category",
        icon: <MdLayers size={20} />,
        label: <Link href="/dashboard/products/category">Category</Link>,
      },
      {
        key: "/products/sub-category",
        icon: <MdLayers size={20} />,
        label: (
          <Link href="/dashboard/products/sub-category">Sub Category</Link>
        ),
      },
    ],
  },
  {
    key: "/activities",
    icon: <MdAddChart size={20} />,
    label: <Link href="/dashboard/activities">Activities</Link>,
  },
  {
    key: "/news",
    icon: <IoNewspaperOutline size={20} />,
    label: <Link href="/dashboard/news">News</Link>,
  },
  {
    key: "/success-stories",
    icon: <MdMenuBook size={20} />,
    label: <Link href="/dashboard/success-stories">Success Story</Link>,
  },
  {
    key: "/contacts",
    icon: <MdContacts size={20} />,
    label: <Link href="/dashboard/contacts">Contacts</Link>,
  },
  {
    key: "/settings",
    icon: <IoMdSettings size={20} />,
    label: <Link href="/dashboard/settings">Settings</Link>,
  },
];
