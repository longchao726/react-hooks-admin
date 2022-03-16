import TypingCard from '@/components/typingCard'
import { Row, Col, Card, Button, Divider, Tooltip, Radio, Space } from 'antd'
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useState, useRef } from 'react';

const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
const ButtonDemo = () => {
  const [size, setSize] = useState('large');
  const [loadings, setLoadings] = useState([]);
  //在hooks中setTimeout拿到的值不是最新的，所以要经过ref来拿到最新的值
  const lastLoadings = new useRef(null);

  lastLoadings.current = loadings;

  const handleSizeChange = e => { setSize(e.target.value) };

  const enterLoading = index => {
    lastLoadings.current[index] = true;
    setLoadings([...lastLoadings.current])
    setTimeout(() => {
      lastLoadings.current[index] = false;
      setLoadings([...lastLoadings.current])
    }, 6000);
  };

  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Divider orientation="left" plain>
              按钮类型
            </Divider>
            <p>按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</p>
          </Card>
          <Card bordered={false} className="card-item">
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <Button type="primary" size={size}>
              Primary
            </Button>
            <Button size={size}>Default</Button>
            <Button type="dashed" size={size}>
              Dashed
            </Button>
            <br />
            <Button type="link" size={size}>
              Link
            </Button>
            <br />
            <Button type="primary" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={size}>
              Download
            </Button>
            <Divider orientation="left" plain>
              按钮尺寸
            </Divider>
            <p>按钮有大、中、小三种尺寸。</p>
            <p>通过设置 <code>size</code> 为 <code>large</code> <code>small</code> 分别把按钮设为大、小尺寸。若不设置 <code>size</code>，则尺寸为中。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Space style={{ width: '100%' }}>
              <Button type="primary" loading>
                Loading
              </Button>
              <Button type="primary" size="small" loading>
                Loading
              </Button>
              <Button type="primary" icon={<PoweroffOutlined />} loading />
            </Space>

            <Space style={{ width: '100%' }}>
              <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                Click me!
              </Button>
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[1]}
                onClick={() => enterLoading(1)}
              >
                Click me!
              </Button>
              <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loadings[2]}
                onClick={() => enterLoading(2)}
              />
            </Space>
            <Divider orientation="left" plain>
              加载中状态
            </Divider>
            <p>添加 <code>loading</code> 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <div className="site-button-ghost-wrapper">
              <Button type="primary" ghost>
                Primary
              </Button>
              <Button ghost>Default</Button>
              <Button type="dashed" ghost>
                Dashed
              </Button>
              <Button type="primary" danger ghost>
                Danger
              </Button>
            </div>
            <Divider orientation="left" plain>
              幽灵按钮
            </Divider>
            <p>幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <br />
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
              Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
            <br />
            <br />
            <Tooltip title="search">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button type="primary" shape="circle" size="large">
              A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <br />
            <Tooltip title="search">
              <Button shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <Tooltip title="search">
              <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />} size="large">
              Search
            </Button>
            <Button icon={<SearchOutlined />} size="large" href="" />
            <Divider orientation="left" plain>
              图标按钮
            </Divider>
            <p>当需要在 <code>Button</code> 内嵌入 <code>Icon</code> 时，可以设置 <code>icon</code> 属性，或者直接在 <code>Button</code> 内使用 <code>Icon</code> 组件。
              如果想控制 <code>Icon</code> 具体的位置，只能直接使用 <code>Icon</code> 组件，而非 <code>icon</code> 属性。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Button type="primary">Primary</Button>
            <Button type="primary" disabled>
              Primary(disabled)
            </Button>
            <br />
            <Button>Default</Button>
            <Button disabled>Default(disabled)</Button>
            <br />
            <Button type="dashed">Dashed</Button>
            <Button type="dashed" disabled>
              Dashed(disabled)
            </Button>
            <br />
            <Button type="text">Text</Button>
            <Button type="text" disabled>
              Text(disabled)
            </Button>
            <br />
            <Button type="link">Link</Button>
            <Button type="link" disabled>
              Link(disabled)
            </Button>
            <br />
            <Button danger>Danger Default</Button>
            <Button danger disabled>
              Danger Default(disabled)
            </Button>
            <br />
            <Button danger type="text">
              Danger Text
            </Button>
            <Button danger type="text" disabled>
              Danger Text(disabled)
            </Button>
            <br />
            <Button type="link" danger>
              Danger Link
            </Button>
            <Button type="link" danger disabled>
              Danger Link(disabled)
            </Button>
            <div className="site-button-ghost-wrapper">
              <Button ghost>Ghost</Button>
              <Button ghost disabled>
                Ghost(disabled)
              </Button>
            </div>
            <Divider orientation="left" plain>
              不可用状态
            </Divider>
            <p>添加 <code>disabled</code> 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Button type="primary" danger>
              Primary
            </Button>
            <Button danger>Default</Button>
            <Button type="dashed" danger>
              Dashed
            </Button>
            <Button type="text" danger>
              Text
            </Button>
            <Button type="link" danger>
              Link
            </Button>
            <Divider orientation="left" plain>
              危险按钮
            </Divider>
            <p>在 4.0 之后，危险成为一种按钮属性而不是按钮类型。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ButtonDemo