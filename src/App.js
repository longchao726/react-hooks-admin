import React, { useState } from 'react'
import './app.css'
import { Layout } from 'antd';
import SiderNav from './components/siderNav'
import HeaderBar from './components/headerBar';
import Router from './router'
import './assets/font/iconfont.css'
const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => { setCollapsed(!collapsed) };
  return (
    <div id='page'>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <SiderNav />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 16px' }}>
            <HeaderBar collapsed={collapsed} toggle={toggle} />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '12px 16px',
              padding: 12,
              minHeight: 280,
            }}
          >
            <Router />
          </Content>
          <Footer style={{ textAlign: 'center' }}>React-Admin ©2022 Created by 630458188@qq.com</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

