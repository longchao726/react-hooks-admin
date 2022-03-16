import { Space, Row, Col, Card, Divider } from 'antd';
import Icon, {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  createFromIconfontCN,
  SmileTwoTone, HeartTwoTone, CheckCircleTwoTone
} from '@ant-design/icons';
import TypingCard from '@/components/typingCard'
const cardContent = `
                  <p>语义化的矢量图形。使用图标组件，你需要安装 <code>@ant-design/icons</code> 图标组件包：</p>
                  <p class='codeBlock'><span class='prominent'>npm install</span> --save @ant-design/icons</p>
                 `
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
);

const HeartIcon = props => <Icon component={HeartSvg} {...props} />

const PandaIcon = props => <Icon component={PandaSvg} {...props} />

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const IconFont1 = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const IconDemo = () => {
  return (
    <div>
      <TypingCard source={cardContent} title='如何使用' />
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Space>
              <HomeOutlined />
              <SettingFilled />
              <SmileOutlined />
              <SyncOutlined spin />
              <SmileOutlined rotate={180} />
              <LoadingOutlined />
            </Space>
            <Divider orientation="left" plain>
              基本用法
            </Divider>
            <p>通过 <code>@ant-design/icons</code> 引用 Icon 组件，不同主题的 Icon 组件名为图标名加主题做为后缀，也可以通过设置 <code>spin</code> 属性来实现动画旋转效果。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Space>
              <HeartIcon style={{ color: 'hotpink' }} />
              <PandaIcon style={{ fontSize: '32px' }} />
              <Icon component={HomeOutlined} />
              <HomeOutlined />
            </Space>
            <Divider orientation="left" plain>
              自定义图标
            </Divider>
            <p>利用 <code>Icon</code> 组件封装一个可复用的自定义图标。可以通过 <code>component</code> 属性传入一个组件来渲染最终的图标，以满足特定的需求。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Space>
              <IconFont type="icon-javascript" />
              <IconFont type="icon-java" />
              <IconFont type="icon-shoppingcart" />
              <IconFont type="icon-python" />
            </Space>
            <Divider orientation="left" plain>
              使用 iconfont.cn 的多个资源
            </Divider>
            <p><code>@ant-design/icons@4.1.0</code> 以后，<code>scriptUrl</code> 可引用多个资源，用户可灵活的管理 iconfont.cn 图标。如果资源的图标出现重名，会按照数组顺序进行覆盖。</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Space>
              <SmileTwoTone />
              <HeartTwoTone twoToneColor="#eb2f96" />
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Space>
            <Divider orientation="left" plain>
              多色图标
            </Divider>
            <p>双色图标可以通过 <code>twoToneColor</code> 属性设置主题色。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Space>
              <IconFont1 type="icon-tuichu" />
              <IconFont1 type="icon-facebook" />
              <IconFont1 type="icon-twitter" />
            </Space>
            <Divider orientation="left" plain>
              使用 iconfont.cn
            </Divider>
            <p>对于使用 iconfont.cn 的用户，通过设置 <code>createFromIconfontCN</code> 方法参数对象中的 <code>scriptUrl</code> 字段， 即可轻松地使用已有项目中的图标。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default IconDemo