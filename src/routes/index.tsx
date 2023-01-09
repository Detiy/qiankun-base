import React from "react";
import { useRoutes } from "react-router-dom";

// 懒加载路由组件
import Login from "../pages/login"; // 登录页面
import Main from "../pages/main"; // 主页面
// import NotFound from "../pages/notFound"; // 404页面


const App = () => {
  const appRoutesElement = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/main",
      element: <Main />,
      children: [],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/micro-vue-app",
      element: (
        <div id="micro-vue-app"></div>
      ),
    },
    {
      path: "/micro-react-app",
      element: (
        <div id="micro-react-app"></div>
      ),
    }
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);
  return appRoutesElement;
};
export default App;
