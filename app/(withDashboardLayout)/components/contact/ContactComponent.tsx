/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import React, { useState } from "react";
import { Button, Form, Space } from "antd";
import { FaTrash } from "react-icons/fa6";
import Table, { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";

import { useDeleteContactMutation, useGetContacts } from "@/hooks/contact.hook";

const ContactComponent = () => {
  const [selectedKey, setSelectedKey] = useState();
  const [isDeleteModalVisible, setDeleteModalOpen] = useState(false);
  const [form] = Form.useForm();

  // hooks
  const { data: contacts } = useGetContacts();
  const { mutate: deleteContact } = useDeleteContactMutation();

  // delete data
  const handleDelete = async () => {
    if (!selectedKey) {
      return;
    }
    deleteContact(selectedKey);
  };

  // reset field
  const handleReset = () => {
    // reset form
    const resetAllFieldsToNull = () => {
      const fields = form.getFieldsValue(); // Get all fields' names
      const resetFields = Object.keys(fields).reduce((acc: any, key: any) => {
        acc[key] = null; // Set each field to null
        return acc;
      }, {});
      form.setFieldsValue(resetFields); // Update form fields
    };
    resetAllFieldsToNull();
    setDeleteModalOpen(false);
    setSelectedKey(undefined);
    form.resetFields();
  };

  const columns: ColumnsType<AnyObject> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
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
      render: (_, record) => (
        <Space>
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
      width: "20%",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-primary mb-5">
        Contact {contacts?.data?.length}
      </h1>

      <Table
        columns={columns}
        scroll={{ x: "max-content" }}
        className="custom-table"
        bordered={true}
        dataSource={contacts?.data || []}
      />

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
