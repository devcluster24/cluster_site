import React from "react";
import LoginForm from "./LoginForm";
import { Card } from "antd";

const LoginPage = () => {
  return (
    <div className="bg-white w-full  min-h-[500px] flex justify-center items-center">
      <Card
        title="Login"
        style={{ width: 400, margin: "auto", border: "1px solid lightgray" }}
      >
        <LoginForm />
      </Card>
    </div>
  );
};

export default LoginPage;
