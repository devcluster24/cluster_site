"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Card, Spin, Input } from "antd";
import Image from "next/image";
import { getAccessToken } from "@/utils/token";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import ReusableModal from "../../components/ReusableModal";

const Settings = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const [selectedRecord, setSelectedRecord] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const token = await getAccessToken("devAccessToken");
    console.log(token);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/users/me`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMGU4NjdmM2IzZWU3MzJhZGM3YjciLCJlbWFpbCI6ImRldmNsdXN0ZXIyNEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE3Mzg0OTA5MDgsImV4cCI6MTczODU3NzMwOH0.3xI-RD47zUMqMnTchcrCiGdW0TFMI0yeJMDUwo7AdP8`,
          },
        }
      );

      if (response?.data?.success) {
        setData(response?.data?.data);
        console.log("Data fetched successfully:", response?.data?.data);
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
    fetchData();
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const values = await form.validateFields();
      let imageUrl =
        selectedRecord.profileImg ||
        "https://cdn-icons-png.flaticon.com/512/21/21104.png";

      if (fileList.length > 0) {
        const url = await imageUploadCloudinary(fileList[0].originFileObj);
        imageUrl = url;
      }

      const newData = {
        authorName: values.authorName,
        role: values.role,
        company: values.company,
        content: editorContent,
        profileImg: imageUrl,
      };

      if (selectedRecord) {
        // Edit mode
        await axios.patch(
          `${process.env.NEXT_PUBLIC_SERVER_API}/testimonials/${selectedRecord._id}`,
          newData,
          {
            headers: {
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMGU4NjdmM2IzZWU3MzJhZGM3YjciLCJlbWFpbCI6ImRldmNsdXN0ZXIyNEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE3Mzg0OTA5MDgsImV4cCI6MTczODU3NzMwOH0.3xI-RD47zUMqMnTchcrCiGdW0TFMI0yeJMDUwo7AdP8`,
            },
          }
        );
        Swal.fire("Updated", "Testimonial updated successfully.", "success");
      } else {
        // Add mode
        await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_API}/testimonials`,
          newData,
          {
            headers: {
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMGU4NjdmM2IzZWU3MzJhZGM3YjciLCJlbWFpbCI6ImRldmNsdXN0ZXIyNEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE3Mzg0OTA5MDgsImV4cCI6MTczODU3NzMwOH0.3xI-RD47zUMqMnTchcrCiGdW0TFMI0yeJMDUwo7AdP8`,
            },
          }
        );
        Swal.fire("Created", "Testimonial created successfully.", "success");
      }

      fetchData();
      handleReset();
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error", "Failed to process request.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_API}/testimonials/${selectedRecord._id}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMGU4NjdmM2IzZWU3MzJhZGM3YjciLCJlbWFpbCI6ImRldmNsdXN0ZXIyNEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE3Mzg0OTA5MDgsImV4cCI6MTczODU3NzMwOH0.3xI-RD47zUMqMnTchcrCiGdW0TFMI0yeJMDUwo7AdP8`,
          },
        }
      );
      if (response?.data?.success) {
        Swal.fire("Deleted", "Testimonial deleted successfully.", "success");
        fetchData();
      } else {
        Swal.fire("Error", "Failed to delete Testimonial.", "error");
      }
    } catch (error) {
      console.error("Error deleting Testimonial:", error);
      Swal.fire("Error", "Failed to delete Testimonial.", "error");
    } finally {
      handleReset();
    }
  };
  // reset field
  const handleReset = () => {
    setIsModalVisible(false);
    setIsDeleteModalVisible(false);
    setSelectedRecord(null);
    form.resetFields();
    setFileList([]);
    setIsLoading(false);
    setEditorContent("");
  };
  if (isLoading) {
    return (
      <div className=" min-h-[400px]  flex justify-center items-center">
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

        <Card className="w-full max-w-4xl  mx-auto border border-gray-300">
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

            <div className="w-full p-4 md:border-l border-0">
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary">
                  {data?.name || "Name"}{" "}
                </h2>

                <p className="text-secondary text-md">
                  {data?.email || "Email"}
                </p>
              </div>
              <div className=" flex flex-col gap-4 mt-8">
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

        <div className="flex justify-between mt-10 max-w-md mx-auto">
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            className="bg-primary hover:bg-primary-dark"
          >
            Edit Profile
          </Button>
          <Button
            type="primary"
            onClick={() => setIsModalVisible(true)}
            className="bg-primary hover:bg-primary-dark"
          >
            Change Password
          </Button>
        </div>
      </div>

      <ReusableModal
        className="lg:w-6xl md:w-5xl w-[90%]"
        title={selectedRecord ? "Edit Profile" : "Add Testimonial"}
        visible={isModalVisible}
        onClose={() => handleReset()}
        onConfirm={handleSubmit}
        content={
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit} // Directly pass handleSubmit
          >
            <Form.Item
              label="Author Name"
              name="authorName"
              rules={[{ required: true, message: "Please enter author name" }]}
            >
              <Input placeholder="Enter author name" />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please enter role" }]}
            >
              <Input placeholder="Enter role" />
            </Form.Item>

            <Form.Item
              label="Company"
              name="company"
              rules={[{ required: true, message: "Please enter company name" }]}
            >
              <Input placeholder="Enter company" />
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
