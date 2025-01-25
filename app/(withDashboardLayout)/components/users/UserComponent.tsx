/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tag,
  Upload,
  UploadProps,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FaPen, FaTrash } from "react-icons/fa6";
import Table, { ColumnsType } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import Image from "next/image";
import ReusableModal from "@/components/ui/ReusableModal";
import { useState } from "react";
import { useUserRegistration } from "@/hooks/auth.hook";
import imageUploadCloudinary from "@/utils/imageUploadCloudinary";
import { useGetUsers, useUserDelete, useUserUpdate } from "@/hooks/user.hook";
import DeleteModal from "@/components/ui/DeleteModal";

const UserComponent = () => {
  // state
  const [currentData, setCurrentData] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<number | null>(null);

  const [fileList, setFileList] = useState<any[]>([]);
  // form state
  const [form] = Form.useForm();

  // hooks
  const { mutate: handleRegister, isPending: registerPending } =
    useUserRegistration();
  const { mutate: handleUserUpdate, isPending: userUpdatePending } =
    useUserUpdate();
  const { data: usersData, isLoading: userLoadingData } = useGetUsers();
  const { mutate: handleUserDelete, isPending: userDeletePending } =
    useUserDelete();

  // options
  const roleOptions = [
    { value: "ADMIN", label: "ADMIN" },
    { value: "SUPER_ADMIN", label: "SUPER_ADMIN" },
  ];
  const statusOptions = [
    { value: "ACTIVE", label: "ACTIVE" },
    { value: "PENDING", label: "PENDING" },
    { value: "BLOCKED", label: "BLOCKED" },
  ];
  // add data
  const handleAdd = async (values: any) => {
    // upload the image in cloudinary
    let imageUrl: string = "";
    if (
      values.image &&
      Array.isArray(values.image) &&
      values.image.length > 0
    ) {
      imageUrl = await imageUploadCloudinary(values.image[0].originFileObj);
    }
    // store the form data
    const newData = {
      ...values,
      image: imageUrl,
    };

    handleRegister(newData);
    handleReset();
  };
  // edit data
  const handleEdit = async (key: number, updatedData: any) => {
    let imageUrl: string = "";

    if (
      updatedData.image &&
      Array.isArray(updatedData.image) &&
      updatedData.image.length > 0
    ) {
      imageUrl = await imageUploadCloudinary(
        updatedData.image[0].originFileObj
      );
    }
    // store the form data
    const newData = {
      ...updatedData,
      image: imageUrl,
    };
    handleUserUpdate({ id: key, data: newData });
    handleReset();
  };

  // delete data
  const handleDelete = async (key: number) => {
    if (key !== null) {
      handleUserDelete(key);
      handleReset();
    }
  };

  // Handle file changes
  const handleUpload: UploadProps["onChange"] = (info) => {
    const newFileList = [...info.fileList].slice(-1);
    setFileList(newFileList);
  };

  // table columns
  const columns: ColumnsType<AnyObject> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (_, record: any) => {
        if (record?.role === "SUPER_ADMIN") {
          return <Tag color={"orange"}>SUPER_ADMIN</Tag>;
        } else if (record?.role === "ADMIN") {
          return <Tag color={"green"}>ADMIN</Tag>;
        }
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record: any) => {
        if (record?.status === "PENDING") {
          return <Tag color={"orange"}>PENDING</Tag>;
        } else if (record?.status === "ACTIVE") {
          return <Tag color={"green"}>ACTIVE</Tag>;
        } else if (record?.status === "BLOCKED") {
          return <Tag color={"red"}>BLOCKED</Tag>;
        }
      },
    },
    {
      title: "Is Deleted",
      dataIndex: "isDeleted",
      key: "isDeleted",
      render: (_, record: any) => (
        <div>
          <span
            className={`font-semibold px-2 py-1 rounded ${
              record.isDeleted
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {record.isDeleted ? "Deleted" : "Not Deleted"}
          </span>
        </div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record: any) => (
        <div className="w-16 h-16">
          {record.image ? (
            <Image
              src={record.image}
              alt={record.name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          ) : (
            "No Image"
          )}
        </div>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      align: "center",
      render: (_, record: any) => (
        <Space>
          <Button
            type="link"
            icon={<FaPen className="size-5 hover:text-blue-800" />}
            onClick={() => {
              Object.entries(record).forEach(([key, value]) => {
                if (key !== "image") {
                  form.setFieldValue(key, value);
                } else {
                  setFileList([{ url: value }]);
                }
              });
              setCurrentData(record);
              setIsModalVisible(true);
            }}
          ></Button>
          <Button
            type="link"
            danger
            icon={<FaTrash className="size-5 hover:text-red-800" />}
            onClick={() => {
              setDeleteModalOpen(true);
              setSelectedKey(record.id);
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  // handle reset field
  const handleReset = () => {
    setCurrentData("");
    setIsModalVisible(false);
    setDeleteModalOpen(false);
    setSelectedKey(null);
    form.resetFields();
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center text-primary">
        User {usersData?.data?.length}
      </h1>

      <div className="flex justify-between gap-5 items-center mb-5">
        <Button
          onClick={() => {
            handleReset();
            setIsModalVisible(true);
          }}
          type="primary"
          className="bg-primary"
          icon={<PlusOutlined />}
        >
          Add User
        </Button>
      </div>

      <Table
        columns={columns}
        scroll={{ x: "max-content" }}
        className="custom-table"
        bordered={true}
        dataSource={usersData?.data}
        loading={
          userLoadingData ||
          registerPending ||
          userUpdatePending ||
          userDeletePending
        }
      />

      {/* add user  */}
      <ReusableModal
        className="lg:w-xl md:w-3xl w-[90%]"
        title={currentData ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        showCancelButton
        showConfirmButton
        onConfirm={() => {
          form
            .validateFields()
            .then((values) => {
              if (currentData) {
                handleEdit(currentData.id, values);
              } else {
                handleAdd(values);
              }
            })
            .catch(() => {
              setIsModalVisible(true);
            });
        }}
        content={
          <Form form={form} layout="vertical" onFinish={handleAdd}>
            <Form.Item
              name={"name"}
              label="Name"
              rules={[{ required: true, message: "Please enter a name" }]}
            >
              <Input placeholder="Enter name" />
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[{ required: true, message: "Please enter a email" }]}
            >
              <Input type="email" placeholder="Enter email" />
            </Form.Item>
            {!currentData && (
              <Form.Item
                name={"password"}
                label="password"
                rules={[{ required: true, message: "Please enter a password" }]}
              >
                <Input.Password placeholder="Enter password" />
              </Form.Item>
            )}
            <Form.Item
              name={"contactNo"}
              label="Contact No"
              rules={[{ required: true, message: "Please enter a contact no" }]}
            >
              <Input placeholder="Enter contact no" />
            </Form.Item>
            <Form.Item
              name="image"
              label="Upload image"
              valuePropName="fileList"
              getValueFromEvent={(e) => e && e.fileList}
              rules={
                currentData
                  ? []
                  : [{ required: true, message: "Please upload image" }]
              }
            >
              <Upload
                fileList={fileList}
                onChange={handleUpload}
                listType="picture-card"
                beforeUpload={() => false} // Disable automatic upload
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            {currentData && (
              <>
                <Form.Item
                  name={"role"}
                  label="Role"
                  rules={[{ required: true, message: "Please enter a role" }]}
                >
                  <Select options={roleOptions} placeholder="Enter role" />
                </Form.Item>

                <Form.Item
                  name={"status"}
                  label="Status"
                  rules={[{ required: true, message: "Please enter a status" }]}
                >
                  <Select options={statusOptions} placeholder="Enter status" />
                </Form.Item>
              </>
            )}
          </Form>
        }
      />

      <DeleteModal
        isOpen={isDeleteModalVisible}
        onConfirm={() => handleDelete(selectedKey as number)}
        onClose={() => handleReset()}
        message="Are you sure you want to delete this User?"
      />
    </>
  );
};
export default UserComponent;
