
import { Space, Row, Col, Card, Divider, Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import TypingCard from '@/components/typingCard'
import { useRef, useState } from 'react';
const { SubMenu } = Menu;
const cardContent = `
                  <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
                  <ol>
                    <li>○ 用于收罗一组命令操作。</li>
                    <li>○ Select 用于选择，而 Dropdown 是命令集合。</li>
                  </ol>
                 `

const menu = (
  <Menu>
    <Menu.Item key={1}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled key={2}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled key={3}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger key={4}>a danger item</Menu.Item>
  </Menu>
);

const menu1 = (
  <Menu>
    <Menu.Item key={1}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key={2}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item key={3}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu2 = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const menu3 = (
  <Menu>
    <Menu.ItemGroup title="Group title" key="1">
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu" key="2">
      <Menu.Item key="1">3rd menu item</Menu.Item>
      <Menu.Item key="2">4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled key="3">
      <Menu.Item key="1">5d menu item</Menu.Item>
      <Menu.Item key="2">6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const DropdownDemo = () => {
  const [loadings, setLoadings] = useState([]);
  const loadingRef = useRef(null);
  loadingRef.current = loadings;
  const enterLoading = index => {
    loadingRef.current[index] = true;
    setLoadings([...loadingRef.current])
    setTimeout(() => {
      loadingRef.current[index] = false;
      setLoadings([...loadingRef.current])
    }, 6000);
  };

  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Space>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href='#'>
                  Hover me <DownOutlined />
                </a>
              </Dropdown>
            </Space>
            <Divider orientation="left" plain>
              基本
            </Divider>
            <p>最简单的下拉菜单。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Space>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Button>bottomLeft</Button>
              </Dropdown>
              <Dropdown overlay={menu} placement="bottom" arrow>
                <Button>bottom</Button>
              </Dropdown>
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>bottomRight</Button>
              </Dropdown>
              <br />
              <Dropdown overlay={menu} placement="topLeft" arrow>
                <Button>topLeft</Button>
              </Dropdown>
              <Dropdown overlay={menu} placement="top" arrow>
                <Button>top</Button>
              </Dropdown>
              <Dropdown overlay={menu} placement="topRight" arrow>
                <Button>topRight</Button>
              </Dropdown>
            </Space>
            <Divider orientation="left" plain>
              箭头
            </Divider>
            <p>可以展示一个箭头</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Dropdown overlay={menu2}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me, Click menu item <DownOutlined />
              </a>
            </Dropdown>
            <Divider orientation="left" plain>
              触发事件
            </Divider>
            <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Dropdown overlay={menu3}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Cascading menu <DownOutlined />
              </a>
            </Dropdown>
            <Divider orientation="left" plain>
              多级菜单
            </Divider>
            <p>传入的菜单里有多个层级。</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Space direction="vertical">
              <Space wrap>
                <Dropdown overlay={menu1} placement='bottom'>
                  <Button>bottom</Button>
                </Dropdown>
                <Dropdown overlay={menu1} placement="bottomLeft">
                  <Button>bottomLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu1} placement="bottomRight">
                  <Button>bottomRight</Button>
                </Dropdown>
              </Space>
              <Space wrap>
                <Dropdown overlay={menu1} placement='top'>
                  <Button>top</Button>
                </Dropdown>
                <Dropdown overlay={menu1} placement="topLeft">
                  <Button>topLeft</Button>
                </Dropdown>
                <Dropdown overlay={menu1} placement="topRight">
                  <Button>topRight</Button>
                </Dropdown>
              </Space>
            </Space>
            <Divider orientation="left" plain>
              弹出位置
            </Divider>
            <p>支持 6 个弹出位置。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Space direction="vertical">
              <Dropdown.Button type="primary" loading overlay={menu}>
                Submit
              </Dropdown.Button>
              <Dropdown.Button type="primary" size="small" loading overlay={menu}>
                Submit
              </Dropdown.Button>
              <Dropdown.Button
                type="primary"
                loading={loadings[0]}
                overlay={menu}
                onClick={() => enterLoading(0)}
              >
                Submit
              </Dropdown.Button>
              <Dropdown.Button
                icon={<DownOutlined />}
                loading={loadings[1]}
                overlay={menu}
                onClick={() => enterLoading(1)}
              >
                Submit
              </Dropdown.Button>
            </Space>
            <Divider orientation="left" plain>
              加载中状态
            </Divider>
            <p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DropdownDemo