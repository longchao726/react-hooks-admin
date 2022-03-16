import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Home = lazy(() => import('../pages/home'))

// 基本组件Demo
const ButtonDemo = lazy(() => import('../pages/general/buttonDemo'))
const IconDemo = lazy(() => import('../pages/general/iconDemo'))

//导航组件Demo
const DropdownDemo = lazy(() => import('../pages/navigation/dropdownDemo'))
const MenuDemo = lazy(() => import('../pages/navigation/menuDemo'))
const StepsDemo = lazy(() => import('../pages/navigation/stepsDemo'))

//输入组件Demo
const BasicFormDemo = lazy(() => import('../pages/entry/form/basicFormDemo'))
const StepFormDemo = lazy(() => import('../pages/entry/form/stepFormDemo'))
const UploadDemo = lazy(() => import('../pages/entry/uploadDemo'))

//显示组件Demo
const CarouselDemo = lazy(() => import('../pages/display/carouselDemo'))
const CollapseDemo = lazy(() => import('../pages/display/collapseDemo'))
const ListDemo = lazy(() => import('../pages/display/listDemo'))
const TableDemo = lazy(() => import('../pages/display/tableDemo'))
const TabsDemo = lazy(() => import('../pages/display/tabsDemo'))

//反馈组件Demo
const SpinDemo = lazy(() => import('../pages/feedback/spinDemo'))
const ModalDemo = lazy(() => import('../pages/feedback/modalDemo'))
const NotificationDemo = lazy(() => import('../pages/feedback/notificationDemo'))

//其它
const AnimationDemo = lazy(() => import('../pages/other/animationDemo'))
const GalleryDemo = lazy(() => import('../pages/other/galleryDemo'))
const DraftDemo = lazy(() => import('../pages/other/draftDemo'))
const ChartDemo = lazy(() => import('../pages/other/chartDemo'))
const LoadingDemo = lazy(() => import('../pages/other/loadingDemo'))
const NotFound = lazy(() => import('../pages/other/notFound'))
const SpringText = lazy(() => import('../pages/other/springText'))

//关于
const About = lazy(() => import('../pages/about'))


const routes = [
  { path: '/', element: <Home />, },
  { path: '/general/button', element: <ButtonDemo />, },
  { path: '/general/icon', element: <IconDemo />, },
  { path: '/navigation/dropdown', element: <DropdownDemo />, },
  { path: '/navigation/menu', element: <MenuDemo />, },
  { path: '/navigation/steps', element: <StepsDemo />, },
  { path: '/entry/form/basic-form', element: <BasicFormDemo />, },
  { path: '/entry/form/step-form', element: <StepFormDemo />, },
  { path: '/entry/upload', element: <UploadDemo />, },
  { path: '/display/carousel', element: <CarouselDemo />, },
  { path: '/display/collapse', element: <CollapseDemo />, },
  { path: '/display/list', element: <ListDemo />, },
  { path: '/display/table', element: <TableDemo />, },
  { path: '/display/tabs', element: <TabsDemo />, },
  { path: '/feedback/modal', element: <ModalDemo />, },
  { path: '/feedback/notification', element: <NotificationDemo />, },
  { path: '/feedback/spin', element: <SpinDemo />, },
  { path: '/other/animation', element: <AnimationDemo />, },
  { path: '/other/gallery', element: <GalleryDemo />, },
  { path: '/other/draft', element: <DraftDemo />, },
  { path: '/other/chart', element: <ChartDemo />, },
  { path: '/other/loading', element: <LoadingDemo />, },
  { path: '/other/404', element: <NotFound />, },
  { path: '/other/springText', element: <SpringText />, },
  { path: '/about', element: <About /> },
]



//顶部加载条
const Loading = () => {
  useEffect(() => {
    NProgress.start();
    return NProgress.done();
  }, [])
  return (<div />)
}



const Router = () => {
  const isLogin = sessionStorage.getItem('username')
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map(({ path, element }) => {
          return !!isLogin ? <Route path={path} key={path} element={element} /> :
            <Route path='*' key='/login' element={<Navigate replace to='/login' />} />
        })}
      </Routes>
    </Suspense>
  )
}

export default Router