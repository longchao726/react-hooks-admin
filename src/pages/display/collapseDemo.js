import React from 'react'
import { Col, Row, Divider, Card, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import TypingCard from '@/components/typingCard'
const { Panel } = Collapse;
const cardContent = (
  `
  <ul class="card-ul">
    <li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
    <li><code>手风琴</code> 是一种特殊的折叠面板，只允许单个内容区域展开。</li>
  </ul>
  `
)

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CollapseDemo = () => {
  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} className='card-item'>
            <Collapse defaultActiveKey={['1']}>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Divider orientation="left" plain>
              折叠面板
            </Divider>
            <p>可以同时展开多个面板，这个例子默认展开了第一个。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Collapse accordion>
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Divider orientation="left" plain>
              手风琴
            </Divider>
            <p>手风琴，每次只打开一个 tab。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Collapse>
              <Panel header="This is panel header 1" key="1">
                <Collapse defaultActiveKey="1">
                  <Panel header="This is panel nest panel" key="1">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Divider orientation="left" plain>
              面板嵌套
            </Divider>
            <p>嵌套折叠面板。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              className="site-collapse-custom-collapse"
            >
              <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Divider orientation="left" plain>
              自定义面板
            </Divider>
            <p>自定义各个面板的背景色、圆角、边距和图标。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Collapse defaultActiveKey={['1']}>
              <Panel header="This is panel header with arrow icon" key="1">
                <p>{text}</p>
              </Panel>
              <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
                <p>{text}</p>
              </Panel>
            </Collapse>
            <Divider orientation="left" plain>
              隐藏箭头
            </Divider>
            <p>你可以通过 <code>showArrow=&#123;false&#125;</code> 隐藏 <code>CollapsePanel</code> 组件的箭头图标。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CollapseDemo