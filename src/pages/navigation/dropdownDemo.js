
import { Space, Row, Col, Card, Divider, Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import TypingCard from '@/components/typingCard'

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

const DropdownDemo = () => {
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
        </Col>
      </Row>
    </div>
  )
}

export default DropdownDemo