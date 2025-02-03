"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Card, Spin, Input } from "antd";
import Image from "next/image";
import { getAccessToken, removeTokenFromCookie } from "@/utils/token";
import axios from "axios";
import Swal from "sweetalert2";
import ReusableModal from "../../components/ReusableModal";
import { FaSpinner } from "react-icons/fa";

const Settings = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    async function getToken() {
      const response = await getAccessToken();
      setToken(response);
    }
    getToken();
  }, []);

  const fetchData = async () => {
    if (!token) return;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/users/me`,
        {
          headers: { Authorization: token },
        }
      );
      if (response?.data?.success) {
        setData(response?.data?.data);
      } else {
        console.error("Error fetching data:", response.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  // Handle Password Change
  const handleChangePassword = async (values) => {
    if (!token) return;

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_API}/auth/change-password`,
        values,
        {
          headers: { Authorization: token },
        }
      );

      if (response?.data?.success) {
        Swal.fire("Success", "Password changed successfully.", "success");
        setIsPasswordModalVisible(false);
        removeTokenFromCookie();
        form.resetFields();
      } else {
        Swal.fire(
          "Error",
          response?.data?.message || "Failed to change password",
          "error"
        );
      }
    } catch (error) {
      console.error("Error changing password:", error);
      Swal.fire(
        "Error",
        error?.response?.data?.message || "Failed to change password",
        "error"
      );
      removeTokenFromCookie();
    } finally {
      removeTokenFromCookie();
      setIsLoading(false);
    }
  };

  // reset field
  const handleReset = () => {
    setIsPasswordModalVisible(false);
    setIsLoading(false);
    form.resetFields();
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <div className="relative">
      <div>
        <h1 className="text-2xl font-bold text-center text-primary mb-5">
          My Profile
        </h1>

        <Card className="w-full max-w-4xl mx-auto border border-gray-300">
          <div className="flex lg:flex-row md:flex-row flex-col gap-5">
            <div className="flex justify-center w-full p-4">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"}
                className="border"
                alt={"user image"}
                width={200}
                height={200}
              />
            </div>

            <div className="w-full p-4 md:border-l border-0 md:border-[#0dfg0s]">
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary">
                  {data?.name || "Name"}
                </h2>
                <p className="text-secondary text-md">
                  {data?.email || "Email"}
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex justify-between">
                  <span className="text-gray-500">Name:</span>
                  <span>{data?.name || "Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span>{data?.email || "Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Role:</span>
                  <span>{data?.role || "Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact No:</span>
                  <span>{data?.contactNumber || "Not Provided"}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center mt-10 max-w-md mx-auto">
          <Button
            type="primary"
            onClick={() => setIsPasswordModalVisible(true)}
            className="bg-primary hover:bg-primary-dark"
          >
            Change Password
          </Button>
        </div>
      </div>

      {/* Change Password Modal */}
      <ReusableModal
        className="lg:w-6xl md:w-5xl w-[90%]"
        title={"Change Password"}
        visible={isPasswordModalVisible}
        onClose={() => handleReset()}
        onConfirm={handleChangePassword}
        content={
          <Form
            form={form}
            layout="vertical"
            onFinish={handleChangePassword} // Directly pass handleSubmit
          >
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[
                { required: true, message: "Please enter your old password" },
              ]}
            >
              <Input.Password placeholder="Enter old password" />
            </Form.Item>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[
                { required: true, message: "Please enter your new password" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long",
                },
              ]}
            >
              <Input.Password placeholder="Enter new password" />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                disabled={isLoading}
                className="border transition ease-in-out bg-primary duration-300 border-primary shadow-2xl  text-[#ffff] text-sm font-semibold px-4 md:px-5 py-2 flex items-center gap-1 mt-2 text-center disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin text-lg" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Form.Item>
          </Form>
        }
      />
    </div>
  );
};

export default Settings;
