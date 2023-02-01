import React, { useEffect } from "react";
import "./index.css";
import {
  LockOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import loginApi from '../../api/login'

/* eslint-disable */
const Login = () => {
  const goNavigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("login_success") === '1') {
      goNavigate("/main");
    }
    // 校验是否已经登录
    // if (localStorage.getItem("token")) {
    //   goNavigate("/main");
    // }
  }, []);
  const [form] = Form.useForm(); // 只有函数式组件能用
  type formValues = {
    username?: string,
    password?: string
  }
  /**
   * 输入用户名和密码
   * @param {string} values 用户名/密码
   */
  const onFinish = (values:formValues) => {
    if (values.username !== "admin") {
      message.warning("输入的用户名错误, 请重新输入");
      form.resetFields();
      return;
    }
    if (values.password !== "123456") {
      message.warning("输入的密码错误, 请重新输入");
      form.resetFields();
      return;
    }
    // let params = {
    //   username: values.username,
    //   password: values.password,
    // }
    // loginApi.login(params).then((res: AxiosResponse) => {
    // if (res.status === 200) goNavigate("/main")
    // })
    localStorage.setItem("login_success", "1");
    goNavigate("/main");
  }
  return (
    <div className="log_bc">
      <div className="log_title">欢迎来到天天睡不醒</div>
      <div className="log_form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入你的用户名!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入你的密码!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div className="log_btn_box">
            <Button
              type="primary"
              htmlType="submit"
              className="log_form_btn"
              icon={<ArrowRightOutlined />}
              shape="circle"
              size="large"
              ghost
            ></Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
