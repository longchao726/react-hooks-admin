import React, { useEffect, useState } from 'react'
import { Form, Input, Row, Col } from 'antd'
import './login.css'
import { useNavigate, useLocation } from 'react-router-dom';

//生成随机数
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const Login = () => {
  const [focusItem, setFocusItem] = useState(-1);
  const [code, setCode] = useState('');
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    createCode()
  }, [])

  const onFinish = (values) => {
    sessionStorage.setItem('username', values.username);
    navigate(location.state ? location.state : '/')
  };

  const createCode = () => {
    const canvas = document.getElementById('canvasId');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      let code = ''
      ctx.clearRect(0, 0, 80, 39)
      for (let i = 0; i < 4; i++) {
        const char = chars[randomNum(0, 57)]
        code += char
        ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
        ctx.fillStyle = '#D3D7F7'
        ctx.textBaseline = 'middle'
        ctx.shadowOffsetX = randomNum(-3, 3)
        ctx.shadowOffsetY = randomNum(-3, 3)
        ctx.shadowBlur = randomNum(-3, 3)
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        let x = 80 / 5 * (i + 1)
        let y = 39 / 2
        let deg = randomNum(-25, 25)
        /**设置旋转角度和坐标原点**/
        ctx.translate(x, y)
        ctx.rotate(deg * Math.PI / 180)
        ctx.fillText(char, 0, 0)
        /**恢复旋转角度和坐标原点**/
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
      }
      setCode(code)
    }

  }
  return (
    <div className='loginBox'>
      <div className='container'>
        <h3 className='title'>管理员登录</h3>
        <Form
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name='username'
            rules={[
              { required: true, message: '请输入用户名' },
              {
                validator: (_, value) => {
                  if (value && value.toUpperCase() !== 'ADMIN') {
                    return Promise.reject('该用户不存在');
                  }
                  return Promise.resolve();
                },
                validateTrigger: ['onSubmit']
              }
            ]}
          >
            <Input
              onFocus={() => setFocusItem(0)}
              onBlur={() => setFocusItem(-1)}
              maxLength={16}
              placeholder='用户名'
              addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}} />} />

          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              { required: true, message: '请输入密码' },
              {
                validator: (_, value) => {
                  if (value && value !== '123456') {
                    return Promise.reject('密码不正确');
                  }
                  return Promise.resolve();
                },
                validateTrigger: ['onSubmit']
              }
            ]}
          >
            <Input
              onFocus={() => setFocusItem(1)}
              onBlur={() => setFocusItem(-1)}
              type='password'
              maxLength={16}
              placeholder='密码'
              addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}} />} />
          </Form.Item>
          <Form.Item
            name='verification'
            validateTrigger='onBlur'
            rules={[
              { required: true, message: '请输入验证码', },
              {
                validator: (_, value) => {
                  if (value && code.toUpperCase() !== value.toUpperCase()) {
                    return Promise.reject('验证码错误');
                  }
                  return Promise.resolve();
                },
                validateTrigger: 'onChange'
              }
            ]}
          >
            <Row>
              <Col span={15}>
                <Input
                  onFocus={() => setFocusItem(2)}
                  onBlur={() => setFocusItem(-1)}
                  maxLength={4}
                  placeholder='验证码'
                  addonBefore={<span className='iconfont icon-securityCode-b'
                    style={focusItem === 2 ? styles.focus : {}} />} />
              </Col>
              <Col span={9}>
                <canvas onClick={createCode} width="80" height='39' id='canvasId' style={{ marginTop: -5 }} />
              </Col>
            </Row>
          </Form.Item>
          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录' />
          </div>
        </Form>
        <div className='footer'>
          <div>欢迎登陆后台管理系统</div>
        </div>
      </div>
    </div >
  )
}
const styles = {
  focus: {
    width: '20px',
    opacity: 1
  },
}

export default Login