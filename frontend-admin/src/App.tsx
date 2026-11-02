import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import './app.css'

const navigation = [
  { label: 'Tổng quan', path: '/' }, { label: 'Người dùng', path: '/users' },
  { label: 'Địa điểm', path: '/places' }, { label: 'Khách sạn', path: '/hotels' },
  { label: 'Nhà hàng', path: '/restaurants' }, { label: 'Chuyến đi', path: '/trips' },
  { label: 'Tích hợp API', path: '/apis' }, { label: 'Cài đặt', path: '/settings' },
]

function Placeholder({ title }: { title: string }) {
  return <section className="empty-state"><span className="eyebrow">MODULE</span><h2>{title}</h2><p>Module này sẽ được triển khai sau khi nhóm thống nhất nghiệp vụ và cấu trúc dữ liệu.</p></section>
}

export default function App() {
  return <div className="admin-shell">
    <aside className="sidebar"><div className="brand-mark">✦</div><div className="brand-copy"><strong>TripMind</strong><span>ADMIN CONSOLE</span></div>
      <div className="workspace-label">WORKSPACE</div><nav>{navigation.map(item => <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}><span className="nav-dot" />{item.label}</NavLink>)}</nav>
      <div className="sidebar-footer"><span className="status-dot"/>Hệ thống quản trị</div>
    </aside>
    <main className="main-area"><header className="topbar"><div><span className="breadcrumb">AI TRAVEL PLANNER</span><span className="crumb-divider">/</span><span className="breadcrumb current">ADMIN</span></div><div className="admin-chip"><span className="avatar">A</span><span>Quản trị viên</span></div></header>
      <Routes><Route path="/" element={<Dashboard />} />{navigation.slice(1).map(item => <Route key={item.path} path={item.path} element={<Placeholder title={item.label} />} />} /></Routes>
    </main>
  </div>
}
