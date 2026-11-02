const metrics = [
  { title: 'Người dùng', icon: '◎', tone: 'blue' },
  { title: 'Địa điểm', icon: '⌖', tone: 'violet' },
  { title: 'Chuyến đi', icon: '↗', tone: 'orange' },
]

export default function Dashboard() {
  return <div className="page-content">
    <div className="page-heading"><div><span className="eyebrow">TỔNG QUAN HỆ THỐNG</span><h1>Dashboard</h1><p>Theo dõi nhanh hoạt động của nền tảng AI Travel Planner.</p></div><span className="live-badge"><i/>Admin workspace</span></div>
    <div className="notice"><span className="notice-icon">i</span><div><strong>Dashboard đang ở chế độ khung giao diện</strong><p>Số liệu sẽ hiển thị sau khi API quản trị và schema dùng chung được nhóm thống nhất.</p></div></div>
    <div className="metrics-grid">{metrics.map((metric, index) => <article className="metric-card" key={metric.title}><div className="metric-top"><span className={`metric-icon ${metric.tone}`}>{metric.icon}</span><span className="metric-index">0{index + 1}</span></div><span className="metric-title">Tổng số {metric.title.toLowerCase()}</span><strong className="metric-value">—</strong><span className="metric-caption">Chưa có dữ liệu kết nối</span></article>)}</div>
    <div className="dashboard-bottom"><section className="activity-card"><div className="section-title"><div><span className="eyebrow">SYSTEM MONITOR</span><h2>Hoạt động hệ thống</h2></div><span className="subtle-pill">Chưa kết nối</span></div><div className="activity-empty"><div className="pulse-icon">⌁</div><strong>Chưa có hoạt động để hiển thị</strong><span>Nhật ký hệ thống sẽ xuất hiện khi backend cung cấp dữ liệu.</span></div></section>
      <section className="quick-card"><span className="eyebrow">QUẢN TRỊ</span><h2>Không gian Admin độc lập</h2><p>Frontend Admin sử dụng API riêng và phân quyền ở backend. Chưa có module nào gọi dữ liệu giả.</p><div className="quick-divider"/><div className="health-row"><span><i className="health-dot"/>Backend API</span><span>Chưa kiểm tra</span></div><div className="health-row"><span><i className="health-dot muted"/>Database</span><span>Chưa kết nối</span></div></section></div>
  </div>
}
