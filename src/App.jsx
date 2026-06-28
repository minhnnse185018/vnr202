import React from 'react';
import HistorySection from './components/HistorySection';
import BusinessSection from './components/BusinessSection';
import AIUsageSection from './components/AIUsageSection';

const navItems = [
  { href: '#boi-canh', label: 'Bối cảnh' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#chien-luoc', label: 'Hai miền' },
  { href: '#lien-he', label: 'Liên hệ' },
];

function App() {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <a className="brand" href="#top" aria-label="Về đầu trang">
          <span className="brand-mark">VNR</span>
          <span>Nhóm 3</span>
        </a>
        <nav aria-label="Mục lục thuyết trình">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <HistorySection />
        <BusinessSection />
        <AIUsageSection />
      </main>

      <footer className="site-footer">
        <strong>VNR202 - Nhóm 3</strong>
        <span>Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước.</span>
      </footer>
    </div>
  );
}

export default App;
