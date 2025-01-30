"use client";

import React, { useState } from "react";
import { Button, Form, Card } from "antd";
import Image from "next/image";

const Settings = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

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
                width={400}
                height={400}
              />
            </div>

            <div className="w-full p-4 md:border-l border-0">
              <div className="text-center">
                <h2 className="text-xl font-bold text-primary">{"Name"} </h2>

                <p className="text-secondary text-md">{"Email"}</p>
              </div>
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500">Name:</span>
                  <span>{"Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email:</span>
                  <span>{"Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Role:</span>
                  <span>{"Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact No:</span>
                  <span>{"Not Provided"}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
