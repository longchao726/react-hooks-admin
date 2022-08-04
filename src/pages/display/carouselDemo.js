import React, { useState } from 'react'
import { Carousel, Col, Row, Divider, Card, Radio } from 'antd';
import TypingCard from '@/components/typingCard'

const cardContent = (
  `
  <ul class="card-ul">
    <li>当有一组平级的内容。</li>
    <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
    <li>常用于一组图片或卡片轮播。</li>
  </ul>
  `
)
const contentStyle = {
  style: {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
}


const CarouselDemo = () => {
  const [dotPosition, setDotPosition] = useState('top');

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Carousel afterChange={onChange}>
              <div>
                <h3 style={contentStyle.style}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>4</h3>
              </div>
            </Carousel>
            <Divider orientation="left" plain>
              基本
            </Divider>
            <p>最简单的用法。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle.style}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>4</h3>
              </div>
            </Carousel>
            <Divider orientation="left" plain>
              自动切换
            </Divider>
            <p>定时切换下一张。</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} className='card-item'>
            <Radio.Group
              onChange={handlePositionChange}
              value={dotPosition}
              style={{
                marginBottom: 8,
              }}
            >
              <Radio.Button value="top">Top</Radio.Button>
              <Radio.Button value="bottom">Bottom</Radio.Button>
              <Radio.Button value="left">Left</Radio.Button>
              <Radio.Button value="right">Right</Radio.Button>
            </Radio.Group>
            <Carousel dotPosition={dotPosition}>
              <div>
                <h3 style={contentStyle.style}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>4</h3>
              </div>
            </Carousel>
            <Divider orientation="left" plain>
              位置
            </Divider>
            <p>位置有四个方向。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Carousel autoplay effect="fade">
              <div>
                <h3 style={contentStyle.style}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle.style}>4</h3>
              </div>
            </Carousel>
            <Divider orientation="left" plain>
              渐显
            </Divider>
            <p>切换效果为渐显。</p>
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default CarouselDemo