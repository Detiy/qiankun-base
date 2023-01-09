import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css"
import App from "./routes";
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

import { initGlobalState, MicroAppStateActions } from 'qiankun';

const state = {
  name: '最爱suhonny'
}
// 初始化 state
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev, '=====');
});
// 关闭微应用的全局监听
actions.setGlobalState(state);

// 关闭微应用的全局监听
actions.offGlobalStateChange();

// 注册微应用信息
registerMicroApps([
  {
    name: 'micro-react-app', // 微应用 name registered
    entry: '//localhost:3000', // 微应用域名
    container: '#micro-react-app', // 微应用渲染容器
    activeRule: '/micro-react-app', // 微应用渲染路由路径
    props: { // 传入参数
      name: "最爱suhonny"
    }
  },
  {
    name: 'micro-vue-app',
    entry: '//localhost:3002',
    container: '#micro-vue-app',
    activeRule: '/micro-vue-app',
  },
]);

start();

// React 18的写法
createRoot(document.getElementById('root') as HTMLElement).render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// React 16 的写法
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
