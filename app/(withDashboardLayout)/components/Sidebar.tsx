import React from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { MenuItems } from "./MenuItems";

type SidebarProps = {
  collapsed: boolean;
};
export default function SidebarItems({ collapsed }: SidebarProps) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: "#ffffff",
        padding: "5px",
        borderRight: "1px solid lightgray",
        boxShadow: "none",
      }}
    >
      <Menu
        mode="inline"
        items={MenuItems}
        style={{
          borderTop: 0,
          boxShadow: "none",
          border: "none",
          margin: 0,
          padding: 0,
        }}
      />
    </Sider>
  );
}
