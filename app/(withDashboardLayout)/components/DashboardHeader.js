import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Header } from "antd/es/layout/layout";
import LogoutButton from "../components/LogoutButton";

export default function DashboardHeader({ collapsed, setCollapsed }) {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: "0px",
        padding: "10px",
        borderBottom: "1px solid lightgray",
        height: "80px",
        boxSizing: "border-box",
      }}
    >
      <nav className="flex items-center justify-between w-full my-3 px-5 ">
        <div className="flex  items-center justify-between space-x-4">
          <Link className="flex justify-center flex-1" href="/">
            <div className=" flex items-center gap-2">
              <Image
                src={
                  "https://www.dev-cluster.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoHeader.700cedd6.png&w=64&q=75"
                }
                width={50}
                height={50}
                alt="logo"
              />
              <h1 className="text-2xl font-bold text-gray-800">DevCluster</h1>
            </div>
          </Link>

          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>
        <div className=" ">
          <LogoutButton />
        </div>
      </nav>
    </Header>
  );
}
