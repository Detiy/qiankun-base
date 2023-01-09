import React from 'react';
import './index.css'
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FullScreenContainer, BorderBox1 } from '@jiaminghi/data-view-react'

/* eslint-disable */
const main = () => {
  // useEffect(() => {

  // }, [])
  /**
   * 定义 跳转路由的方法
   */
  const goNavigate = useNavigate();
  /**
   * 展示React微应用的方法
   */
  const showReact = () => {
    goNavigate('/micro-react-app')
  }
  /**
   * 展示Vue微应用的方法
   */
  const showVue = () => {
    goNavigate('/micro-vue-app')
  }

  // 渲染页面
  return (
    <FullScreenContainer>
      <div className="main">
        <div className='box'>
          <BorderBox1>
            <Button className="reactBtn" type="primary" size="large" ghost onClick={showReact}>显示react微应用</Button>
            <Button className="vueBtn" type="primary" size="large" ghost onClick={showVue}>显示vue微应用</Button>
          </BorderBox1>
        </div>
      </div>
    </FullScreenContainer>
  );
}

export default main;
