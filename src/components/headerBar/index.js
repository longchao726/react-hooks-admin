import React, { useState } from 'react'
import { Badge, Menu, Dropdown } from 'antd'
import screenfull from 'screenfull'
import { MenuUnfoldOutlined, MenuFoldOutlined, NotificationOutlined, ShrinkOutlined, ArrowsAltOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom'
import './headerBar.less'
const avatar = require('@/assets/img/user-avatar.jpg');

const HeaderBar = ({ collapsed, toggle }) => {
  const [count, setCount] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    sessionStorage.removeItem('username')
    navigate('/login', { state: location.pathname })
  }

  const menu = (
    <Menu className='menu'>
      <Menu.ItemGroup title='用户中心' className='menu-group'>
        <Menu.Item key={1}>个人信息</Menu.Item>
        <Menu.Item key={2}><span onClick={logout}>退出登录</span></Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title='设置中心' className='menu-group'>
        <Menu.Item key={3}>个人设置</Menu.Item>
        <Menu.Item key={4}>系统设置</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )

  const screenfullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
      setIsFullscreen(!screenfull.isFullscreen)
    }
  }

  return (
    <div className='header-box'>
      <span className='trigger' onClick={toggle}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
      <div style={{ lineHeight: '64px', float: 'right' }}>
        <ul className='header-ul'>
          <li>
            <span onClick={screenfullToggle}>
              {isFullscreen ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
            </span>
          </li>
          <li onClick={() => setCount(0)}>
            <span>
              <Badge count={count} overflowCount={99} style={{ marginRight: -17 }}>
                <NotificationOutlined />
              </Badge>
            </span>
          </li>
          <li>
            <Dropdown overlay={menu}>
              <img src={avatar} alt="" />
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderBar