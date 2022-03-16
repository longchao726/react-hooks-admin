import React, { useEffect, useState } from 'react'
import * as Icon from '@ant-design/icons'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'


const renderMenuItem = ({ title, key, icon }) => (
  <Menu.Item key={key} icon={Icon[icon] && React.createElement(Icon[icon])}>
    <Link to={key}>{title}</Link>
  </Menu.Item>
)

const renderSubMenu = ({ title, icon, key, subs }) => (
  <Menu.SubMenu key={key} icon={Icon[icon] && React.createElement(Icon[icon])} title={title}>
    {subs && subs.map(item => item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item))}
  </Menu.SubMenu>
)

function CustomMenu({ menus }) {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(['/']);
  const pathname = useLocation().pathname;


  useEffect(() => {
    const rank = pathname.split('/');
    setSelectedKeys([pathname])
    if (rank.length === 3) setOpenKeys(['/' + rank[1]]);
    if (rank.length === 4) setOpenKeys([rank.slice(0, 2).join('/'), rank.slice(0, 3).join('/')]);
  }, [pathname])

  const subMenuOpenChange = (openKeys) => {
    const lastOpenKey = openKeys[openKeys.length - 1];
    //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
    //每次只取最新展开的菜单，如果lastOpenKey是undefined说明只打开了一个父级菜单，或者说laseOpenKey中包含已经打开的父级菜单
    //说明打开的是三级菜单，所以要全部打开，只适合三级菜单
    //否则的话就打开最新的父级菜单
    if (!lastOpenKey || lastOpenKey.includes(openKeys[0])) {
      setOpenKeys(openKeys)
    } else {
      setOpenKeys([lastOpenKey])
    }
  }

  const menuItemClick = ({ key, keyPath }) => {
    setSelectedKeys([key])
    if (keyPath.length === 1) setOpenKeys([]);
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      onClick={menuItemClick}
      openKeys={openKeys}
      onOpenChange={subMenuOpenChange}
    >
      {menus && menus.map(item => item.subs && item.subs.length > 0 ? renderSubMenu(item) : renderMenuItem(item))}
    </Menu>
  )
}

export default CustomMenu