import { Switch, Row, Col, Card, Divider, Menu, Button } from 'antd';
import {
  MailOutlined, AppstoreOutlined, SettingOutlined,
  MenuUnfoldOutlined, MenuFoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined,
} from '@ant-design/icons';
import TypingCard from '@/components/typingCard'
import React, { useState } from 'react';
const cardContent = `
                  导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
                 `
const cardContent1 = `
                  <p>Menu 元素为 <code>ul</code>，因而仅支持 <code>li</code> 以及 <code>script-supporting</code> 子元素。因而你的子节点元素应该都在 <code>Menu.Item</code> 内使用。</p>
                  <p>Menu 需要计算节点结构，因而其子元素仅支持 <code>Menu.*</code> 以及对此进行封装的 HOC 组件。</p>
                 `
const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const MenuDemo = () => {
  const [current, setCurrent] = useState('mail');
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [theme, setTheme] = useState('dark');
  const [current1, setCurrent1] = useState('1');

  const handleClick = e => { setCurrent(e.key) };

  const toggleCollapsed = () => { setCollapsed(!collapsed) };

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const changeTheme = value => { setTheme(value ? 'dark' : 'light') };

  const handleClick1 = e => { setCurrent1(e.key) };

  return (
    <div>
      <TypingCard source={cardContent} />
      <TypingCard source={cardContent1} title='开发者注意事项' />
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} className='card-item'>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                Navigation One
              </Menu.Item>
              <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                Navigation Two
              </Menu.Item>
              <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </Menu>
            <Divider orientation="left" plain>
              顶部导航
            </Divider>
            <p>水平的顶部导航菜单。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Menu
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
            <Divider orientation="left" plain>
              内嵌菜单
            </Divider>
            <p>垂直菜单，子菜单内嵌在菜单区域。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <div style={{ width: 256 }}>
              <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
              </Button>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
              >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                  Option 3
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
            <Divider orientation="left" plain>
              缩起内嵌菜单
            </Divider>
            <p>内嵌菜单可以被缩起/展开。</p>
            <p>你可以在 <a href='https://ant.design/components/layout-cn/#components-layout-demo-side' target='_blank'>Layout</a> 里查看侧边布局结合的完整示例。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
            <Divider orientation="left" plain>
              只展开当前父级菜单
            </Divider>
            <p>点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
            <Divider orientation="left" plain>
              垂直菜单
            </Divider>
            <p>子菜单是弹出的形式。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Switch
              checked={theme === 'dark'}
              onChange={changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <br />
            <br />
            <Menu
              theme={theme}
              onClick={handleClick1}
              style={{ width: 256 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[current1]}
              mode="inline"
            >
              <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
            <Divider orientation="left" plain>
              主题
            </Divider>
            <p>内建了两套主题 <code>light</code> 和 <code>dark</code>，默认 <code>light</code>。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default MenuDemo