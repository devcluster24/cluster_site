"use client";
import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import SidebarItems from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "@/context/user.provider";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [collapsed, setCollapsed] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
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
      </UserProvider>
    </QueryClientProvider>
  );
};

export default DashboardLayout;
