import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
// import headerlogo from "@/assets/logo2.png";
import { Header } from "antd/es/layout/layout";
import LogoutButton from "@/components/ui/LogoutButton";

type DashboardHeaderProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};
export default function DashboardHeader({
  collapsed,
  setCollapsed,
}: DashboardHeaderProps) {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: "0px",
        padding: "0px",
        borderBottom: "1px solid lightgray",
        height: "80px",
      }}
    >
      <nav className="flex items-center justify-between w-full py-3 px-5 ">
        <div className="flex flex-1 items-center justify-between space-x-4">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <Link className="flex justify-center flex-1" href="/">
            <div className="lg:w-[420px]  md:w-[400px] w-[220px]">
              <Image
                src={
                  "https://malikseeds.com/wp-content/uploads/2020/10/logo-english.png"
                }
                width={400}
                height={300}
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="flex ">
          <LogoutButton />
          {/* <BellOutlined className="text-xl" />
          <UserOutlined className="text-xl" /> */}
        </div>
      </nav>
    </Header>
  );
}
