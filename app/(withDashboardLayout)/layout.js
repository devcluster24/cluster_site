"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import DashboardHeader from "./components/DashboardHeader";
import SidebarItems from "./components/Sidebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // <UserProvider>
    <AntdRegistry>
      <Layout style={{ minHeight: "100vh", minwidth: "100%" }}>
        <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <SidebarItems collapsed={collapsed} />
          <Content
            style={{
              padding: 24,
              backgroundColor: "#f5f5f5",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </AntdRegistry>
    // </UserProvider>
  );
};

export default DashboardLayout;
