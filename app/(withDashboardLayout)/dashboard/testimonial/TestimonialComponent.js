"use client";

import DeleteModal from "../../components/DeleteModal";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Space, Spin, Upload } from "antd";
import { FaTrash } from "react-icons/fa6";
import Table from "antd/es/table";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import ReusableModal from "../../components/ReusableModal";
import RichTextEditor from "../../components/RichTextEditor";
import { FaPen, FaSpinner } from "react-icons/fa";
import imageUploadCloudinary from "@/utils/imageUploadCloudinary";
import { getAccessToken } from "@/utils/token";

const TestimonialComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    current_page: 1,
    page_size: 10,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");

  const handleContentChange = (newContent) => {
    setEditorContent(newContent);
  };

  // Handle file changes
  const handleUpload = ({ fileList }) => {
    setFileList(fileList);
  };

  // get data
  const fetchData = async () => {
    setIsLoading(true);
    const token = await getAccessToken();
    console.log(token);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/testimonials?page=${pagination.current_page}&limit=${pagination.page_size}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      // console.log("res", data);

      if (response?.data?.success) {
        setData(response?.data?.data?.result);
        setFilteredData(response?.data?.data?.result);
        setPagination((prev) => ({
          ...prev,
          page_size: response.data.page_size,
          current_page: response.data.current_page,
          total: response.data.total_data_count,
        }));
        // console.log("Data fetched successfully:", response.data);
      } else {
        console.error("Error fetching data:", response.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // delete data
  const handleDelete = async () => {
    setIsLoading(true);
    const token = await getAccessToken();

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_API}/testimonials/${selectedRecord._id}`,
        {
          headers: {
            Authorization: token,
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

  // Open Add/Edit modal
  const openModal = (record = null) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
    if (record) {
      form.setFieldsValue(record); // Populate form when editing
      setEditorContent(record.content);
    }
  };

  // Handle Add & Edit form submission
  const handleSubmit = async () => {
    setIsLoading(true);
    const token = await getAccessToken();

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
              Authorization: token,
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
              Authorization: token,
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

  // Handle pagination
  useEffect(() => {
    if (pagination.current_page && pagination.page_size) {
      fetchData();
    }
  }, [pagination.current_page, pagination.page_size]);

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

  // Handle search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filtered = data.filter(
      (item) =>
        item.authorName.toString().toLowerCase().includes(searchTerm) ||
        item.company.toLowerCase().includes(searchTerm) ||
        item.role.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filtered);
    setPagination({ ...pagination, current_page: 1 });
  };

  // handle table change
  const handleTableChange = (paginationData) => {
    setPagination((prev) => ({
      ...prev,
      current_page: paginationData.current,
      page_size: paginationData.pageSize,
    }));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "profileImg",
      key: "profileImg",
      fixed: "left",
      width: "10%",
      render: (_, record) => {
        return (
          <div>
            <Image
              src={
                record?.profileImg ||
                "https://cdn-icons-png.flaticon.com/512/21/21104.png"
              }
              alt={record.title || "Testimonial Image"}
              width={80}
              height={80}
            />
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "authorName",
      key: "authorName",
      width: "20%",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: " company",
      width: "15%",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: " role",
      width: "10%",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },

    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      align: "center",
      width: "10%",
      render: (_, record) => (
        <Space>
          <Button onClick={() => openModal(record)} icon={<FaPen />} />
          <Button
            type="link"
            danger
            icon={<FaTrash className="size-5 hover:text-red-800" />}
            onClick={() => {
              setSelectedRecord(record);
              setIsDeleteModalVisible(true);
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center text-primary mb-5">
          Testimonial - {data?.length || 0}
        </h1>

        <div className="flex justify-between gap-5 items-center mb-5">
          <Button
            type="primary"
            className="bg-primary"
            onClick={() => openModal()}
          >
            Add Testimonial <BiPlus />
          </Button>
          <Input
            placeholder="Search by Title"
            onChange={(e) => handleSearch(e)}
            style={{ maxWidth: "250px", width: "30%" }}
          />
        </div>

        <Table
          rowKey="id"
          columns={columns}
          pagination={{
            current: pagination.current_page,
            pageSize: pagination.page_size,
            total: pagination.total,
            showSizeChanger: true,
            pageSizeOptions: ["10", "25", "50"],
          }}
          onChange={handleTableChange}
          dataSource={filteredData ? filteredData : data}
          scroll={{ x: "max-content" }}
          className="custom-table"
          bordered={true}
        />
      </div>

      <ReusableModal
        className="lg:w-6xl md:w-5xl w-[90%]"
        title={selectedRecord ? "Edit Testimonial" : "Add Testimonial"}
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

            <Form.Item
              name="content"
              label="Content"
              rules={[
                {
                  required: true,
                  message: "Please enter the Content.",
                },
              ]}
            >
              <RichTextEditor
                placeholder="Enter Testimonial Content"
                value={editorContent}
                onChange={handleContentChange}
                config={{ toolbar: true }}
              />
            </Form.Item>
            <Form.Item
              name="images"
              label="Upload Images"
              valuePropName="fileList"
              getValueFromEvent={(e) => e && e.fileList}
              rules={
                selectedRecord
                  ? []
                  : [{ required: true, message: "Please upload images" }]
              }
            >
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleUpload}
                beforeUpload={() => false}
              >
                <div>
                  {/* <PlusOutlined /> */}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
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

      <DeleteModal
        isOpen={isDeleteModalVisible}
        onConfirm={() => handleDelete()}
        onClose={() => handleReset()}
        message="Are you sure want to delete this Testimonial?"
      />
    </>
  );
};

export default TestimonialComponent;
