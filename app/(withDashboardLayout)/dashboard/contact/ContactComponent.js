"use client";

import DeleteModal from "../../components/DeleteModal";
import React, { useEffect, useState } from "react";
import { Button, Form, Space } from "antd";
import { FaTrash } from "react-icons/fa6";
import Table from "antd/es/table";
import axios from "axios";
import Swal from "sweetalert2";

const ContactComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    current_page: 1,
    page_size: 10,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalVisible, setDeleteModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [form] = Form.useForm();

  // hooks
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/contact?page=${pagination.current_page}&limit=${pagination.page_size}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMGU4NjdmM2IzZWU3MzJhZGM3YjciLCJlbWFpbCI6ImRldmNsdXN0ZXIyNEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE3MzgzOTcyNzAsImV4cCI6MTczODQ4MzY3MH0.khTdDiRflMereSpV7d7hGM17I7tdxmXl_KunOcggUK8`,
          },
        }
      );

      console.log("res", data);

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

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_SERVER_API}/contact/${selectedKey}`,
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzkyMGU4NjdmM2IzZWU3MzJhZGM3YjciLCJlbWFpbCI6ImRldmNsdXN0ZXIyNEBnbWFpbC5jb20iLCJyb2xlIjoic3VwZXJfYWRtaW4iLCJpYXQiOjE3MzgzOTcyNzAsImV4cCI6MTczODQ4MzY3MH0.khTdDiRflMereSpV7d7hGM17I7tdxmXl_KunOcggUK8`,
          },
        }
      );
      if (response?.data?.success) {
        Swal.fire("Deleted", "Contact deleted successfully.", "success");
        fetchData();
      } else {
        Swal.fire("Error", "Failed to delete Contact.", "error");
      }
    } catch (error) {
      console.error("Error deleting Contact:", error);
      Swal.fire("Error", "Failed to delete Contact.", "error");
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

  // reset field
  const handleReset = () => {
    setDeleteModalOpen(false);
    setSelectedKey(null);
    setIsLoading(false);
  };

  const handleTableChange = (paginationData) => {
    setPagination((prev) => ({
      ...prev,
      current_page: paginationData.current,
      page_size: paginationData.pageSize,
    }));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      width: "30%",
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      align: "center",
      width: "100px",
      render: (_, record) => (
        <Space>
          <Button
            type="link"
            danger
            icon={<FaTrash className="size-5 hover:text-red-800" />}
            onClick={() => {
              setSelectedKey(record._id);
              setDeleteModalOpen(true);
            }}
          ></Button>
        </Space>
      ),
      width: "20%",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center text-primary mb-5">
          Contact - {data?.length || 0}
        </h1>

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

      <DeleteModal
        isOpen={isDeleteModalVisible}
        onConfirm={() => handleDelete()}
        onClose={() => handleReset()}
        message="Are you sure you want to delete this Contact?"
      />
    </>
  );
};

export default ContactComponent;
