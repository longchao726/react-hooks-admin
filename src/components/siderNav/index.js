import CustomMenu from '../customMenu'

const menus = [
  {
    title: '首页',
    icon: 'HomeOutlined',
    key: '/',
  },
  {
    title: '基本组件',
    icon: 'LaptopOutlined',
    key: '/general',
    subs: [
      { key: '/general/button', title: '按钮', },
      { key: '/general/icon', title: '图标', },
    ]
  },
  {
    title: '导航组件',
    icon: 'BarsOutlined',
    key: '/navigation',
    subs: [
      { key: '/navigation/dropdown', title: '下拉菜单', },
      { key: '/navigation/menu', title: '导航菜单', },
      { key: '/navigation/steps', title: '步骤条', },
    ]
  },
  {
    title: '输入组件',
    icon: 'EditOutlined',
    key: '/entry',
    subs: [
      {
        key: '/entry/form',
        title: '表单',
        icon: '',
        subs: [
          { key: '/entry/form/basic-form', title: '基础表单', icon: '' },
          { key: '/entry/form/step-form', title: '分步表单', icon: '' }
        ]
      },
      { key: '/entry/upload', title: '上传', icon: '' },
    ]
  },
  {
    title: '显示组件',
    icon: 'DesktopOutlined',
    key: '/display',
    subs: [
      { key: '/display/carousel', title: '轮播图', icon: '' },
      { key: '/display/collapse', title: '折叠面板', icon: '' },
      { key: '/display/list', title: '列表', icon: '' },
      { key: '/display/table', title: '表格', icon: '' },
      { key: '/display/tabs', title: '标签页', icon: '', },
    ]
  },
  {
    title: '反馈组件',
    icon: 'MessageOutlined',
    key: '/feedback',
    subs: [
      { key: '/feedback/modal', title: '对话框', icon: '', },
      { key: '/feedback/notification', title: '通知提醒框', icon: '' },
      { key: '/feedback/spin', title: '加载中', icon: '', }
    ]
  },
  {
    title: '其它',
    icon: 'BulbOutlined',
    key: '/other',
    subs: [
      { key: '/other/animation', title: '动画', icon: '', },
      { key: '/other/gallery', title: '画廊', icon: '', },
      { key: '/other/draft', title: '富文本', icon: '' },
      { key: '/other/chart', title: '图表', icon: '' },
      { key: '/other/loading', title: '加载动画', icon: '' },
      { key: '/other/404', title: '404', icon: '' },
      { key: '/other/springText', title: '弹性文字', icon: '' },
    ]
  },
  {
    title: '关于',
    icon: 'InfoCircleOutlined',
    key: '/about'
  }
]

const SiderNav = () => {
  return (
    <div style={{ height: '100vh', overflowY: 'scroll', userSelect: 'none' }}>
      <div className="logo" />
      <CustomMenu menus={menus} />
    </div>
  )
}

export default SiderNav