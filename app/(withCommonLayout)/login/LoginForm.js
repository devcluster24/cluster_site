"use client";
import { useUserLogin } from "@/hooks/auth.hook";
import { Form, Input, Button } from "antd";
import { useEffect } from "react";

const LoginForm = () => {
  const [form] = Form.useForm();

  // hook
  const {
    mutate: handleUserLogin,
    isPending: isPendingLogin,
    isSuccess: loginSuccess,
  } = useUserLogin();

  const handleLogin = async (values) => {
    // Trigger the mutation
    handleUserLogin(values);
  };

  // Redirect to dashboard after login success using JavaScript
  useEffect(() => {
    if (loginSuccess) {
      // Use window.location to navigate to the dashboard
      window.location.href = "/dashboard";
    }
  }, [loginSuccess]);

  // Set default form values
  useEffect(() => {
    form.setFieldsValue({
      email: "mobassherpautex@gmail.com",
      password: "adminmobassher",
    });
  }, [form]);

  return (
    <Form
      layout="vertical"
      onFinish={handleLogin}
      autoComplete="off"
      form={form} // Use the form instance
      initialValues={{
        email: "mobassherpautex@gmail.com",
        password: "adminmobassher",
      }}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Please enter your password!" },
          { min: 4, message: "Password must be at least 6 characters long!" },
        ]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      <Form.Item>
        <Button loading={isPendingLogin} type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
