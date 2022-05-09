import React, { useState } from 'react'
import { Card, Form, Input, Button, Select, Tooltip, Cascader, Row, Col, Checkbox, message } from 'antd'
import TypingCard from '@/components/typingCard'
import { QuestionCircleOutlined } from '@ant-design/icons'
const { Option } = Select;
const cardContent = `
                  <p>用于创建一个实体或收集信息。</p>
                  <p>需要对输入的数据类型进行校验时。</p>
                 `

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};


const options = [
  {
    label: '北京',
    value: 'beijing',
    children: [
      {
        label: '东城区',
        value: 'dongcheng',
      },
      {
        label: '西城区',
        value: 'xicheng',
      },
      {
        label: '丰台区',
        value: 'fengtai',
      },
      {
        label: '海淀区',
        value: 'haidian',
      }
    ]
  }
]

const prefixSelector = (
  <Form.Item name="prefix" noStyle initialValue={'86'}>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

const BasicFormDemo = () => {
  const [form] = Form.useForm();
  const [text, setText] = useState('获取验证码');
  const [disabled, setDisabled] = useState(false);
  const countdown = () => {
    let time = 60;
    setText(--time + 's');
    setDisabled(true);
    setInterval(() => {
      if (time > 0) {
        setText(--time + 's');
        setDisabled(true);
      } else {
        setText('获取验证码');
        setDisabled(false);
      }
    }, 1000)
  }
  const onFinish = (e) => {
    console.log(e)
    if (!e.agreement) {
      message.error('请先勾选同意协议')
      return;
    }
    message.success('提交成功')
    setTimeout(() => {
      form.resetFields()
    }, 100)
  }
  return (
    <div>
      <TypingCard source={cardContent} />
      <Card bordered={false} title='基础表单'>
        <Form {...layout} form={form} name="control-hooks" style={{ width: '70%', margin: '0 auto' }} onFinish={onFinish}>
          <Form.Item label='邮箱' name='email' rules={[
            {
              type: 'email',
              message: '请输入正确的邮箱地址'
            },
            {
              required: true,
              message: '请填写邮箱地址'
            }
          ]}>
            <Input />
          </Form.Item>
          <Form.Item label='密码' name='password' rules={[
            {
              required: true,
              message: '请输入密码'
            },
            {
              min: 6,
              message: '密码至少为6个字符'
            },
            {
              max: 16,
              message: '密码最多为16个字符'
            },
            {
              whitespace: true,
              message: '密码中不能有空格'
            }
          ]}>
            <Input type='password' />
          </Form.Item>
          <Form.Item label='确认密码' name='confirm' rules={[
            {
              required: true,
              message: '请再次输入密码'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('两次密码输入不一致'));
              },
            }),
          ]}>
            <Input type='password' />
          </Form.Item>
          <Form.Item label={
            <span>
              昵称&nbsp;
              <Tooltip title='请输入您的昵称'>
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
            name='nickname'
            rules={[]}>
            <Input />
          </Form.Item>
          <Form.Item label='居住地' name='residence' rules={[
            {
              type: 'array',
              required: true,
              message: '请选择居住地'
            }
          ]}>
            <Cascader options={options} expandTrigger="hover" placeholder='' />
          </Form.Item>
          <Form.Item label='电话' name='phone' rules={[
            {
              len: 11,
              pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
              required: true,
              message: '请输入正确的11位手机号码'
            }
          ]}>
            <Input addonBefore={prefixSelector}
              style={{
                width: '100%',
              }} />
          </Form.Item>
          <Form.Item label='个人站点' name='website' rules={[
            {
              pattern: /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~/])+$/,
              message: '请输入正确的站点地址'
            }
          ]}>
            <Input />
          </Form.Item>
          <Form.Item label='验证码' name='captcha' rules={[
            { required: true, message: '请输入验证码！' }
          ]}>
            <Row gutter={8}>
              <Col span={12}>
                <Input />
              </Col>
              <Col span={12}>
                <Button disabled={disabled} onClick={(e) => countdown(e)}>{text}</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name='agreement' valuePropName="checked" style={{ marginLeft: '17%' }}>
            <Checkbox>我已阅读并同意<a href='#'>协议</a></Checkbox>
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" disabled={false}>提交</Button>
          </Form.Item>
        </Form>
      </Card>
    </div >
  )
}

export default BasicFormDemo