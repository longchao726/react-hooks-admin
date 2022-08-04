import React, { useState } from 'react'
import TypingCard from '@/components/typingCard'
import { Col, Row, Divider, Card, Space, Table, Tag, Radio } from 'antd';
const cardContent = `
  <ul class='card-ul'>
    <li>当有大量结构化的数据需要展现时；</li>
    <li>当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。</li>
  </ul>
`;
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';

          if (tag === 'loser') {
            color = 'volcano';
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const columns1 = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data1 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const TableDemo = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      <TypingCard source={cardContent} />
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} className='card-item'>
            <Table columns={columns} dataSource={data} />
            <Divider orientation="left" plain>
              基本用法
            </Divider>
            <p>简单的表格，最后一列是各种操作。</p>
          </Card>
          <Card bordered={false} className='card-item'>
            <Radio.Group
              onChange={({ target: { value } }) => {
                setSelectionType(value);
              }}
              value={selectionType}
            >
              <Radio value="checkbox">Checkbox</Radio>
              <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns1}
              dataSource={data1}
            />
            <Divider orientation="left" plain>
              可选择
            </Divider>
            <p>第一列是联动的选择框。可以通过 <code>rowSelection.type</code> 属性指定选择类型，默认为 <code>checkbox</code>。</p>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default TableDemo