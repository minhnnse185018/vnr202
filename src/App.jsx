import React, { useState } from 'react';
import { Landmark, Gamepad2, Flag, Users, Sparkles } from 'lucide-react';
// Gọi lại Component Mốc thời gian của bạn
import HistorySection from './components/HistorySection';

const MEMBERS = [
  'SE183535 - Phùng Khánh Huy',
  'SE185108 - Nguyễn Việt Hùng',
  'SS180064 - Võ Ngọc Bảo Hà',
  'SE185018 - Ngô Nhật Minh',
  'SS180879 - Nguyễn Bùi Tuyết Anh',
];

export default function App() {
  const [showMembers, setShowMembers] = useState(false);

  return (
    <div className="font-body min-h-screen w-full bg-slate-900 text-slate-50 flex flex-col items-center relative">
      
      {/* --- PHẦN 1: HEADER & 2 NÚT CHUYỂN HƯỚNG --- */}
      <div className="w-full max-w-5xl px-6 py-12 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="rounded-full bg-red-700 p-5 shadow-lg mb-6 border border-red-500/50">
          <Flag size={48} className="text-yellow-400" />
        </div>

        {/* Tiêu đề */}
        <h1 className="font-display text-4xl md:text-5xl uppercase tracking-wider text-yellow-400 mb-4">
          Cổng Thông Tin Lịch Sử
        </h1>
        <p className="text-slate-300 text-base md:text-lg mb-12 max-w-2xl">
          Khám phá không gian thực tế ảo, ôn tập kiến thức qua Game và nhìn lại các mốc son lịch sử dân tộc.
        </p>

        {/* Khu vực 2 Nút bấm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
          
          {/* Nút 1: Bảo Tàng 3D */}
          <a
            href="https://viverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 rounded-xl border border-cyan-600/50 bg-slate-800 p-6 shadow-md transition hover:bg-slate-700 hover:border-cyan-400"
          >
            <div className="rounded-full bg-cyan-900/50 p-4">
              <Landmark size={36} className="text-cyan-400" />
            </div>
            <div className="text-left">
              <h3 className="font-display text-2xl uppercase tracking-wider text-cyan-300 mb-1">
                Bảo Tàng 3D
              </h3>
              <p className="text-sm text-slate-400">
                Tham quan không gian triển lãm & viễn cảnh lịch sử trên Viverse.
              </p>
            </div>
          </a>

          {/* Nút 2: Game Caro */}
          <a
            href="https://caro-nhan-pham.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 rounded-xl border border-yellow-600/50 bg-slate-800 p-6 shadow-md transition hover:bg-slate-700 hover:border-yellow-400"
          >
            <div className="rounded-full bg-yellow-900/50 p-4">
              <Gamepad2 size={36} className="text-yellow-400" />
            </div>
            <div className="text-left">
              <h3 className="font-display text-2xl uppercase tracking-wider text-yellow-300 mb-1">
                Đấu Trường Lịch Sử
              </h3>
              <p className="text-sm text-slate-400">
                Thử thách kiến thức với Game Caro Gamification.
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* --- PHẦN 2: MỐC THỜI GIAN --- */}
      <div className="w-full bg-slate-800/50 border-t border-slate-700 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl text-center text-yellow-400 uppercase tracking-widest mb-10">
            Tiến Trình Lịch Sử
          </h2>
          <HistorySection />
        </div>
      </div>

      {/* --- NÚT BẤM NỔI (FLOATING BUTTON) --- */}
      <button
        onClick={() => setShowMembers(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-slate-800 border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-300 shadow-lg hover:bg-slate-700 hover:text-yellow-400 hover:border-yellow-400 transition-all"
      >
        <Users size={18} /> Thành viên & AI
      </button>

      {/* --- MODAL THÀNH VIÊN & MINH BẠCH AI --- */}
      {showMembers && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" 
          onClick={() => setShowMembers(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-slate-600 bg-slate-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Danh sách thành viên */}
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-yellow-400" />
              <h3 className="font-display text-base uppercase tracking-wide text-yellow-400">Nhóm Thực Hiện</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {MEMBERS.map((m) => (
                <li key={m} className="flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-200 font-medium">
                  <Sparkles size={14} className="text-yellow-500" /> {m}
                </li>
              ))}
            </ul>

            {/* Phụ Lục Minh Bạch AI */}
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-cyan-400" />
              <h3 className="font-display text-base uppercase tracking-wide text-cyan-400">Phụ Lục Minh Bạch AI</h3>
            </div>
            <div className="space-y-3 mb-6 text-sm text-slate-300">
              <div className="rounded-lg bg-slate-800 border border-cyan-700/50 p-3 shadow-inner">
                <p className="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
                  <span>🧠</span> Google Gemini
                </p>
                <p className="text-[12.5px] leading-relaxed text-slate-400">
                  Hỗ trợ Brainstorm ý tưởng "Game hóa", cấu trúc UI/UX Landing Page, và biên soạn nội dung hiển thị.
                </p>
              </div>
              <div className="rounded-lg bg-slate-800 border border-purple-700/50 p-3 shadow-inner">
                <p className="font-bold text-purple-300 mb-1 flex items-center gap-1.5">
                  <span>💻</span> Anthropic Claude
                </p>
                <p className="text-[12.5px] leading-relaxed text-slate-400">
                  Hỗ trợ lập trình React Component, thiết kế giao diện Tailwind CSS, và tối ưu hóa Component hiển thị mốc thời gian.
                </p>
              </div>
            </div>

            {/* Nút Đóng */}
            <button 
              onClick={() => setShowMembers(false)} 
              className="w-full rounded-lg bg-slate-800 border border-slate-600 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
            >
              Xác nhận & Đóng
            </button>
          </div>
        </div>
      )}

    </div>
  );
}