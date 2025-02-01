"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Table,
  Form,
  Space,
  Spin,
  UploadProps,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import { FaPen, FaTrash } from "react-icons/fa6";
import Image from "next/image";
import Swal from "sweetalert2";
import axiosInstance from "../../../../lib/AxiosInstance";

const NewsManagementComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    current_page: 1,
    page_size: 10,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [title, setTitle] = useState("");

  const handleContentChange = (newContent) => {
    setEditorContent(newContent);
  };

  // Handle file changes
  const handleUpload: UploadProps["onChange"] = ({ fileList }) => {
    setFileList(fileList);
  };

  // Fetch data
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance({
        url: `/products?page=${pagination.current_page}&page_size=${pagination.page_size}`,
        method: "GET",
      });

      if (response.success) {
        setData(response.data.results);
        setFilteredData(response.data.results);
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

  // handle Add data
  const handleAdd = async () => {
    let imageUrl = "";

    if (fileList.length > 0) {
      const url = await imageUploadCloudinary(fileList[0].originFileObj);
      imageUrl = url;
    }

    const newData = {
      title: title,
      description: editorContent,
      image: imageUrl,
    };

    try {
      const response = await axiosInstance({
        url: "/news/",
        method: "POST",
        data: newData,
      });

      if (response.success) {
        Swal.fire("News Created", "News created successfully.", "success");
        fetchData();
      } else {
        Swal.fire("Error", "Failed to create news.", "error");
      }
    } catch (error) {
      console.error("Error creating news:", error);
      Swal.fire("Error", "Failed to create news.", "error");
    } finally {
      handleReset();
    }
  };

  // handle Edit data
  const handleEdit = async () => {
    if (!selectedRecord) {
      return;
    }
    let imageUrl = selectedRecord.image || "";

    if (fileList.length > 0) {
      const url = await imageUploadCloudinary(fileList[0].originFileObj);
      imageUrl = url;
    }
    const updatedData = {
      title: title,
      description: editorContent,
      image: imageUrl,
    };

    try {
      const response = await axiosInstance({
        url: `/news/${selectedRecord.id}/`,
        method: "PATCH",
        data: updatedData,
      });

      if (response.success) {
        Swal.fire("News Updated", "News updated successfully.", "success");
        fetchData();
      } else {
        Swal.fire("Error", "Failed to update news.", "error");
      }
    } catch (error) {
      console.error("Error updating news:", error);
      Swal.fire("Error", "Failed to update news.", "error");
    } finally {
      handleReset();
    }
  };

  // handle Delete data
  const handleDelete = async () => {
    try {
      const response = await axiosInstance({
        url: `/news/${selectedKey}/`,
        method: "DELETE",
      });

      if (response.success) {
        Swal.fire("Deleted", "News deleted successfully.", "success");
        fetchData();
      } else {
        Swal.fire("Error", "Failed to delete news.", "error");
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      Swal.fire("Error", "Failed to delete news.", "error");
    } finally {
      handleReset();
    }
  };

  // Handle pagination change
  useEffect(() => {
    if (pagination.current_page && pagination.page_size) {
      fetchData();
    }
  }, [pagination.current_page, pagination.page_size]);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    const filtered = data.filter(
      (item) =>
        item.id.toString().toLowerCase().includes(searchTerm) ||
        item.title.toLowerCase().includes(searchTerm)
    );

    setFilteredData(filtered);
    setPagination({ ...pagination, current_page: 1 });
  };

  // Handle pagination change
  const handleTableChange = (paginationData: any) => {
    setPagination((prev) => ({
      ...prev,
      current_page: paginationData.current,
      page_size: paginationData.pageSize,
    }));
  };

  // handle reset field
  const handleReset = () => {
    setIsModalVisible(false);
    setDeleteModalOpen(false);
    setSelectedRecord(null);
    setSelectedKey(null);
    form.resetFields();
    setFileList([]);
    setIsLoading(false);
    setEditorContent("");
    setTitle("");
  };

  const columns: ColumnsType<AnyObject> = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      fixed: "left",
      width: 100,
      render: (_, record) => {
        return (
          <div>
            <Image
              src={record?.image}
              alt={record.title || "news Image"}
              width={80}
              height={80}
            />
          </div>
        );
      },
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      key: "description",
      render: (_, record) => {
        return <p>{record.description.slice(0, 50)}...</p>;
      },
      align: "start",
    },
    {
      title: "Actions",
      key: "actions",
      width: 100,
      fixed: "right",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            icon={<FaPen className="size-5 hover:text-blue-800" />}
            onClick={() => {
              setSelectedRecord(record);
              form.setFieldsValue(record);
              setTitle(record?.title);
              handleContentChange(record?.description);
              setIsModalVisible(true);
            }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<FaTrash className="size-5 hover:text-red-800" />}
            onClick={() => {
              setSelectedKey(record.id);
              setDeleteModalOpen(true);
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="relative">
      {isLoading ? (
        <div className=" min-h-[400px]  flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-center text-primary">
            News Management
          </h1>

          <div className="flex justify-between gap-5 items-center mb-5">
            <Button
              type="primary"
              className="bg-primary"
              icon={<PlusOutlined />}
              onClick={() => {
                handleReset();
                setIsModalVisible(true);
              }}
            >
              Add News
            </Button>
            <Input
              placeholder="Search by Title or ID"
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

          <ReusableModal
            className="lg:w-6xl md:w-5xl w-[90%]"
            title={selectedRecord ? "Edit News" : "Add News"}
            visible={isModalVisible}
            onClose={() => handleReset()}
            showCancelButton
            showConfirmButton
            onConfirm={() => {
              form
                .validateFields()
                .then(() => {
                  if (selectedRecord) {
                    handleEdit();
                  } else {
                    handleAdd();
                  }
                })
                .catch(() => {});
            }}
            content={
              <Form form={form} layout="vertical">
                <Form.Item
                  name="title"
                  label="News Title"
                  rules={[
                    { required: true, message: "Please enter the News title" },
                  ]}
                >
                  <Input
                    placeholder="Enter News Title"
                    onChange={(e) => setTitle(e.target.value)}
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
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>
              </Form>
            }
          />

          <DeleteModal
            isOpen={isDeleteModalVisible}
            onConfirm={() => handleDelete()}
            onClose={handleReset}
            message="Are you sure you want to delete this News?"
          />
        </div>
      )}
    </div>
  );
};

export default NewsManagementComponent;
