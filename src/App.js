
import { Route, Routes } from 'react-router-dom'
import './app.less'
import './assets/font/iconfont.css'
import Index from './pages'
import Login from '@/pages/login'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Index />} />
    </Routes>
  );
}

export default App;

