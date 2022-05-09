import React, { useState } from 'react'
import TypingCard from '@/components/typingCard'
import { observer, inject } from "mobx-react"
import { Steps, Card, Form, Select, Input, Button, Divider, Alert } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { digitUppercase } from '@/utils/utils'
import './form.less'

const { Step } = Steps;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    offset: 5
  }
}
const StepFormDemo = ({ StepFormStore }) => {
  const showStep = () => {
    switch (StepFormStore.current) {
      case 1: return <Step2 />
      case 2: return <Step3 />
      default: return <Step1 />
    }
  }
  return (
    <div>
      <TypingCard source='将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成' />
      <Card title='分步表单' bordered={false} style={{ minHeight: 600 }}>
        <Steps style={styles.steps} current={StepFormStore.current}>
          <Step title="填写转账信息" />
          <Step title="确认转账信息" />
          <Step title="完成" />
        </Steps>
        <div>{showStep()}</div>
      </Card>
    </div>
  )
}


const Step1 = inject('StepFormStore')(observer(({ StepFormStore }) => {
  const [form] = Form.useForm();
  const nextStep = (values) => {
    StepFormStore.setInfo(values)
    StepFormStore.setCurrent(1)
  }
  const info = StepFormStore.info;
  return (
    <div>
      <Form className='stepForm' hideRequiredMark form={form} onFinish={nextStep}>
        <Form.Item
          {...formItemLayout}
          label="付款账户"
          name='payAccount'
          rules={[{ required: true, message: '请选择付款账户' }]}
          initialValue='ant-design@alipay.com'
        >
          <Select placeholder="test@example.com">
            <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="收款账户"
        >
          <Input.Group compact>
            <Select defaultValue='alipay' style={{ width: 100 }}>
              <Option value="alipay">支付宝</Option>
              <Option value="bank">银行账户</Option>
            </Select>
            <Form.Item
              style={{ width: 'calc(100% - 100px)', marginBottom: 0 }}
              name='receiverAccount'
              rules={[
                { required: true, message: '请输入收款人账户' },
                { type: 'email', message: '账户名应为邮箱格式' },
              ]}
              initialValue={info.receiverAccount ? info.receiverAccount : 'test@example.com'}
            >
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="收款人姓名"
          name='receiverName'
          rules={[{ required: true, message: '请输入收款人姓名' }]}
          initialValue={info.receiverName ? info.receiverName : 'Alex'}
        >
          <Input placeholder="请输入收款人姓名" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="转账金额"
          name='amount'
          rules={[
            { required: true, message: '请输入转账金额' },
            {
              pattern: /^(\d+)((?:\.\d+)?)$/,
              message: '请输入合法金额数字',
            },
          ]}
          initialValue={info.amount ? info.amount : '500'}
        >
          <Input prefix="￥" placeholder="请输入金额" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button htmlType='submit' type='primary'>下一步</Button>
        </Form.Item>
      </Form>
      <Divider />
      <div className='desc'>
        <h3>说明</h3>
        <h4>转账到支付宝账户</h4>
        <p>
          如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
        </p>
      </div>
    </div>
  )
}))

const Step2 = inject('StepFormStore')(observer(({ StepFormStore }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const handleSubmit = (values) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      StepFormStore.setCurrent(2)
    }, 2000)
  }
  return (
    <div>
      <Form className='stepForm' id='step2' form={form} onFinish={handleSubmit}>
        <Alert closable showIcon message="确认转账后，资金将直接打入对方账户，无法退回。" style={{ marginBottom: 24 }} />
        <Form.Item {...formItemLayout} className='setFormText' label="付款账户">
          {StepFormStore.info.payAccount}
        </Form.Item>
        <Form.Item {...formItemLayout} label="收款账户">
          {StepFormStore.info.receiverAccount}
        </Form.Item>
        <Form.Item {...formItemLayout} className='setFormText' label="收款人姓名">
          {StepFormStore.info.receiverName}
        </Form.Item>
        <Form.Item {...formItemLayout} className='setFormText' label="转账金额">
          <span className='money'>{StepFormStore.info.amount}</span>
          <span>（{digitUppercase(StepFormStore.info.amount)}）</span>
        </Form.Item>
        <Divider />
        <Form.Item
          {...formItemLayout}
          label="支付密码"
          required={false}
          name='password'
          initialValue='123456'
          rules={[
            {
              required: true,
              message: '需要支付密码才能进行支付',
            },
          ]}
        >
          <Input type="password" autoComplete="off" style={{ width: '80%' }} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 8 }}
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: {
              span: formItemLayout.wrapperCol.span,
              offset: formItemLayout.labelCol.span,
            },
          }}
          label=""
        >
          <Button type="primary" htmlType='submit' loading={loading}>提交</Button>
          <Button onClick={() => StepFormStore.setCurrent(0)} style={{ marginLeft: 8 }}>上一步</Button>
        </Form.Item>
      </Form>
    </div>
  )
}))

const Step3 = inject('StepFormStore')(observer(({ StepFormStore }) => {
  return (
    <div id='step3'>
      <div>
        <div className='icon-box'>
          <CheckCircleOutlined />
        </div>
        <div>
          <h3 className='success'>操作成功</h3>
          <p className='success-desc'>预计两小时内到账</p>
        </div>
        <Form className='result'>
          <Form.Item>
            <Form.Item {...formItemLayout} className='setFormText' label="付款账户">
              {StepFormStore.info.payAccount}
            </Form.Item>
            <Form.Item {...formItemLayout} style={{ marginBottom: 10 }} label="收款账户">
              {StepFormStore.info.receiverAccount}
            </Form.Item>
            <Form.Item {...formItemLayout} className='setFormText' label="收款人姓名">
              {StepFormStore.info.receiverName}
            </Form.Item>
            <Form.Item {...formItemLayout} className='setFormText' label="转账金额">
              <span className='money'>{StepFormStore.info.amount}</span>元
            </Form.Item>
          </Form.Item>
        </Form>
        <div>
          <Button type='primary' onClick={() => StepFormStore.setCurrent(0)}>再转一笔</Button>
          <Button style={{ marginLeft: 8 }}>查看账单</Button>
        </div>
      </div>
    </div>
  )
}))

const styles = {
  steps: {
    maxWidth: 750,
    margin: '16px auto'
  },
  desc: {
    padding: '0 56px',
  }
}


export default inject('StepFormStore')(observer(StepFormDemo))
