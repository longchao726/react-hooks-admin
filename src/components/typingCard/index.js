import Typing from '@/utils/typing'
import { Card } from 'antd'
import { useEffect, useRef } from 'react'

const TypingCard = ({ source, title = '何时使用', delay = 30, height = 136 }) => {
  const sourceRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const typing = new Typing({
      source: sourceRef.current,
      output: outputRef.current,
      delay: delay
    })
    typing.start()
  }, [])

  return (
    <Card hoverable bordered={false} className='card-item' title={title} style={{ minHeight: height }}>
      <div style={{ display: 'none' }} ref={sourceRef} dangerouslySetInnerHTML={{ __html: source }} />
      <div ref={outputRef} />
    </Card>
  )
}

export default TypingCard