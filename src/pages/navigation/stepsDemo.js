import { Row, Col, Card, Divider, Steps, Button, message, Popover } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import TypingCard from '@/components/typingCard'
import { useState } from 'react';

const { Step } = Steps;
const cardContent = `当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。`

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const StepsDemo = () => {

  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);

  const next = () => { setCurrent(current + 1) };

  const prev = () => { setCurrent(current - 1) };

  const onChange = current => { setCurrent1(current) };

  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} className='card-item'>
            <Steps current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
            <Divider orientation="left" plain>
              基本用法
            </Divider>
            <p>简单的步骤条。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps size="small" current={1}>
              <Step title="Finished" />
              <Step title="In Progress" />
              <Step title="Waiting" />
            </Steps>
            <Divider orientation="left" plain>
              迷你版
            </Divider>
            <p>迷你版的步骤条，通过设置 <code>&lt;Steps size="small"&gt;</code> 启用。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps>
              <Step status="finish" title="Login" icon={<UserOutlined />} />
              <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
              <Step status="process" title="Pay" icon={<LoadingOutlined />} />
              <Step status="wait" title="Done" icon={<SmileOutlined />} />
            </Steps>
            <Divider orientation="left" plain>
              带图标的步骤条
            </Divider>
            <p>通过设置 <code>Steps.Step</code> 的 <code>icon</code> 属性，可以启用自定义图标。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
            <Divider orientation="left" plain>
              带图标的步骤条
            </Divider>
            <p>通过设置 <code>Steps.Step</code> 的 <code>icon</code> 属性，可以启用自定义图标。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps direction="vertical" current={1}>
              <Step title="Finished" description="This is a description." />
              <Step title="In Progress" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
            <Divider orientation="left" plain>
              竖直方向的步骤条
            </Divider>
            <p>简单的竖直方向的步骤条。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps current={1} status="error">
              <Step title="Finished" description="This is a description" />
              <Step title="In Process" description="This is a description" />
              <Step title="Waiting" description="This is a description" />
            </Steps>
            <Divider orientation="left" plain>
              步骤运行错误
            </Divider>
            <p>使用 Steps 的 <code>status</code> 属性来指定当前步骤的状态。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps current={1} progressDot={customDot}>
              <Step title="Finished" description="You can hover on the dot." />
              <Step title="In Progress" description="You can hover on the dot." />
              <Step title="Waiting" description="You can hover on the dot." />
              <Step title="Waiting" description="You can hover on the dot." />
            </Steps>
            <Divider orientation="left" plain>
              自定义点状步骤条
            </Divider>
            <p>为点状步骤条增加自定义展示。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Steps
              type="navigation"
              size="small"
              current={current1}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step
                title="Step 1"
                subTitle="00:00:05"
                status="finish"
                description="This is a description."
              />
              <Step
                title="Step 2"
                subTitle="00:01:02"
                status="process"
                description="This is a description."
              />
              <Step
                title="Step 3"
                subTitle="waiting for longlong time"
                status="wait"
                description="This is a description."
              />
            </Steps>
            <Steps
              type="navigation"
              current={current1}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step status="finish" title="Step 1" />
              <Step status="process" title="Step 2" />
              <Step status="wait" title="Step 3" />
              <Step status="wait" title="Step 4" />
            </Steps>
            <Steps
              type="navigation"
              size="small"
              current={current1}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step status="finish" title="finish 1" />
              <Step status="finish" title="finish 2" />
              <Step status="process" title="current process" />
              <Step status="wait" title="wait" disabled />
            </Steps>
            <Divider orientation="left" plain>
              导航步骤
            </Divider>
            <p>导航类型的步骤条。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}


export default StepsDemo