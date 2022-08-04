import React, { useState, useRef } from 'react'
import TypingCard from '@/components/typingCard'
import { Col, Row, Divider, Card, Radio, Tabs, Button } from 'antd';
const { TabPane } = Tabs;
const cardContent = `
  <ul class='card-ul'>
    <li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li>
    <li>既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。</li>
    <li><code>Radio.Button</code> 可作为更次级的页签来使用。</li>
  </ul>
`;

const defaultPanes = Array.from({
  length: 2,
}).map((_, index) => {
  const id = String(index + 1);
  return {
    title: `Tab ${id}`,
    content: `Content of Tab Pane ${index + 1}`,
    key: id,
  };
});


const TabsDemo = () => {
  const [mode, setMode] = useState('top');
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [panes, setPanes] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const handleModeChange = (e) => {
    setMode(e.target.value);
  };
  const onChange = (key) => {
    setActiveKey(key);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setPanes([
      ...panes,
      {
        title: 'New Tab',
        content: 'New Tab Pane',
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    const targetIndex = panes.findIndex((pane) => pane.key === targetKey);
    const newPanes = panes.filter((pane) => pane.key !== targetKey);

    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }

    setPanes(newPanes);
  };

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={24}>
          <Card className='card-item' bordered={false}>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
            <Divider orientation="left" plain>
              基本
            </Divider>
            <p>默认选中第一项。</p>
          </Card>
          <Card className='card-item' bordered={false}>
            <Radio.Group
              onChange={handleModeChange}
              value={mode}
              style={{
                marginBottom: 8,
              }}
            >
              <Radio.Button value="top">Horizontal</Radio.Button>
              <Radio.Button value="left">Vertical</Radio.Button>
            </Radio.Group>
            <Tabs
              defaultActiveKey="1"
              tabPosition={mode}
              style={{
                height: 220,
              }}
            >
              {[
                ...Array.from(
                  {
                    length: 30,
                  },
                  (_, i) => i,
                ),
              ].map((i) => (
                <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                  Content of tab {i}
                </TabPane>
              ))}
            </Tabs>
            <Divider orientation="left" plain>
              滑动
            </Divider>
            <p>可以左右、上下滑动，容纳更多标签。</p>
          </Card>
          <Card className='card-item' bordered={false}>
            <div className='card-container'>
              <Tabs type="card">
                <TabPane tab="Tab Title 1" key="1">
                  <p>Content of Tab Pane 1</p>
                  <p>Content of Tab Pane 1</p>
                  <p>Content of Tab Pane 1</p>
                </TabPane>
                <TabPane tab="Tab Title 2" key="2">
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                  <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab="Tab Title 3" key="3">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
              </Tabs>
            </div>
            <Divider orientation="left" plain>
              卡片式页签容器
            </Divider>
            <p>用于容器顶部，需要一点额外的样式覆盖。</p>
          </Card>
          <Card className='card-item' bordered={false}>
            <div
              style={{
                marginBottom: 16,
              }}
            >
              <Button onClick={add}>ADD</Button>
            </div>
            <Tabs hideAdd onChange={onChange} activeKey={activeKey} type="editable-card" onEdit={onEdit}>
              {panes.map((pane) => (
                <TabPane tab={pane.title} key={pane.key}>
                  {pane.content}
                </TabPane>
              ))}
            </Tabs>
            <Divider orientation="left" plain>
              卡片式页签容器
            </Divider>
            <p>用于容器顶部，需要一点额外的样式覆盖。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TabsDemo