import React, { useState } from 'react';
import { MapPin, Landmark, Gamepad2, Users, Sparkles, X } from 'lucide-react';

// Import hình ảnh từ thư mục assets theo đúng source của bạn
import img1954 from './assets/timeline/1954-geneva-division.jpg';
import img1958 from './assets/timeline/1954-1958-reconstruction.jpg';
import img1960 from './assets/timeline/1958-1960-turning-point.jpg';
import img1965 from './assets/timeline/1960-1965-supply-route.jpg';

const MEMBERS = [
  'SE183535 - Phùng Khánh Huy',
  'SE185108 - Nguyễn Việt Hùng',
  'SS180064 - Võ Ngọc Bảo Hà',
  'SE185018 - Ngô Nhật Minh',
  'SS180879 - Nguyễn Bùi Tuyết Anh',
];

const timelineData = [
  {
    year: '1954',
    shortTitle: 'MỞ CỤC DIỆN MỚI',
    location: 'HIỆP ĐỊNH GIƠNEVƠ',
    heading: 'Việt Nam chia cắt & Tình thế hai miền',
    tags: ['10/10/1954: Tiếp quản', '16/5/1955: Pháp rút'],
    context: [
      'Đất nước tạm thời chia cắt tại vĩ tuyến 17. Miền Bắc bước vào thời kỳ khôi phục, miền Nam trở thành địa bàn đấu tranh chống Mỹ - Diệm.',
      '7/1954 - Hiệp định Giơnevơ: Nhiệm vụ chiến lược của cách mạng phải thích ứng với tình thế mới.',
      '10/10/1954 - Tiếp quản Thủ đô: Những lính Pháp cuối cùng rút khỏi Hà Nội, mở đầu quá trình ổn định miền Bắc.',
      '16/5/1955 - Pháp rút khỏi miền Bắc: Toàn bộ quân đội viễn chinh Pháp và tay sai rút khỏi miền Bắc.'
    ],
    image: img1954
  },
  {
    year: '1954 - 1958',
    shortTitle: 'CỦNG CỐ HẬU PHƯƠNG',
    location: 'MIỀN BẮC VN',
    heading: 'Khôi phục kinh tế & Ổn định xã hội',
    tags: ['Nông nghiệp trọng tâm', 'Kiểm điểm & Sửa sai'],
    context: [
      'Miền Bắc tập trung hàn gắn vết thương chiến tranh, khôi phục nông nghiệp, sửa sai cải cách ruộng đất và chuẩn bị cơ sở cho xây dựng CNXH.',
      '1954-1957: Đảng tập trung khôi phục sản xuất nông nghiệp, đồng thời phục hồi công nghiệp và giao thông vận tải.',
      '7/1956: Cải cách ruộng đất căn bản hoàn thành. Chế độ chiếm hữu ruộng đất phong kiến bị xóa bỏ; hơn 9 triệu người được chia đất.',
      '9/1956: Hội nghị Trung ương 10 nghiêm khắc kiểm điểm sai lầm cải cách ruộng đất, công khai tự phê bình.'
    ],
    image: img1958
  },
  {
    year: '1958 - 1960',
    shortTitle: 'BƯỚC NGOẶT ĐỒNG KHỞI',
    location: 'MIỀN NAM VN',
    heading: 'Chuyển thế tiến công cách mạng',
    tags: ['Nghị quyết 15', '17/1/1960: Bến Tre'],
    context: [
      'Hội nghị Trung ương 15 (1/1959) xác định con đường bạo lực cách mạng, kết hợp đấu tranh chính trị với vũ trang.',
      'Đế quốc Mỹ và chính quyền Ngô Đình Diệm ban hành Luật 10/59, lê máy chém đi khắp miền Nam tàn sát những người yêu nước.',
      'Đêm 17/1/1960, phong trào Đồng Khởi nổ ra tại Mỏ Cày (Bến Tre), đánh dấu bước ngoặt chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công.'
    ],
    image: img1960
  },
  {
    year: '1960 - 1965',
    shortTitle: 'ĐÁNH BẠI CT ĐẶC BIỆT',
    location: 'MIỀN NAM VN',
    heading: 'Phá vỡ Quốc sách Ấp chiến lược',
    tags: ['Chiến tranh đặc biệt', 'Chiến thắng Ấp Bắc'],
    context: [
      'Đế quốc Mỹ chuyển sang áp dụng chiến lược "Chiến tranh đặc biệt" với công thức: Cố vấn Mỹ + Vũ khí Mỹ + Quân chủ lực VNCH.',
      'Trận Ấp Bắc (Mỹ Tho) ngày 2/1/1963 chứng minh quân dân miền Nam hoàn toàn có thể đánh bại các chiến thuật "trực thăng vận", "thiết xa vận".',
      'Phong trào phá "Ấp chiến lược" bùng nổ mạnh mẽ, làm phá sản hoàn toàn chiến lược Chiến tranh đặc biệt của Mỹ.'
    ],
    image: img1965
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const activeData = timelineData[activeIndex];

  return (
    <div className="flex h-screen w-full bg-[#f4f2ee] font-body overflow-hidden">
      
      {/* ================= LEFT SIDEBAR (Maroon) ================= */}
      <div className="w-[32%] bg-[#2C0A0B] h-full flex flex-col p-10 lg:p-14 relative z-10 shadow-[20px_0_40px_rgba(0,0,0,0.2)]">
        
        {/* Header Sidebar */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#E8B036]"></div>
            <p className="text-[#E8B036] font-display uppercase tracking-widest text-xs font-bold">TIMELINE LỊCH SỬ</p>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-white font-bold leading-tight mb-2">
            VNR202 <br /> Chương 2
          </h1>
          <p className="text-[#A47B7D] text-sm italic">
            Sự lãnh đạo của Đảng đối với cách mạng hai miền Nam – Bắc (1954-1965)
          </p>
        </div>

        {/* Timeline Menu */}
        <div className="flex-1 relative">
          <div className="absolute left-[7px] top-4 bottom-10 w-[2px] bg-[#5C1618]"></div>
          
          <div className="space-y-8 relative">
            {timelineData.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div 
                  key={item.year} 
                  onClick={() => setActiveIndex(index)}
                  className="relative pl-8 cursor-pointer group"
                >
                  <div className={`absolute left-0 top-1 h-4 w-4 rounded-full border-[3px] z-10 transition-all duration-300 ${
                    isActive ? 'border-[#E8B036] bg-[#2C0A0B] scale-125' : 'border-[#5C1618] bg-[#2C0A0B] group-hover:border-[#A47B7D]'
                  }`}>
                    {isActive && <div className="absolute inset-[3px] bg-[#E8B036] rounded-full"></div>}
                  </div>
                  
                  <h3 className={`font-display tracking-wider transition-all duration-300 ${
                    isActive ? 'text-[#E8B036] text-2xl font-bold' : 'text-[#8C3F42] text-xl font-medium group-hover:text-[#A47B7D]'
                  }`}>
                    {item.year}
                  </h3>
                  {isActive && (
                    <p className="text-[#E8B036] text-[11px] uppercase tracking-widest mt-1 animate-fade-in">
                      {item.shortTitle}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-4">
          <div className="flex gap-3">
            <a 
              href="https://viverse.com" 
              target="_blank" rel="noopener noreferrer"
              className="flex-1 bg-[#E8B036] hover:bg-[#F3C358] text-[#2C0A0B] flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
            >
              <Landmark size={18} /> Bảo Tàng 3D
            </a>
            <a 
              href="https://caro-nhan-pham.vercel.app/" 
              target="_blank" rel="noopener noreferrer"
              className="flex-1 bg-[#E8B036] hover:bg-[#F3C358] text-[#2C0A0B] flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-colors shadow-lg"
            >
              <Gamepad2 size={18} /> Game Caro
            </a>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="w-full bg-transparent border border-[#5C1618] hover:bg-[#3A1012] text-[#D8B4B5] flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            <Users size={16} /> Thông tin Đồ án
          </button>
        </div>
      </div>

      {/* ================= RIGHT CONTENT AREA ================= */}
      <div className="w-[68%] h-full p-8 lg:p-12 xl:p-20 flex items-center justify-center relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ffffff] to-[#f4f2ee]">
        
        <div className="w-full h-full max-h-[800px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex overflow-hidden">
          
          <div className="w-5/12 bg-[#F9F8F6] p-8 flex items-center justify-center relative border-r border-gray-100">
            <img 
              src={activeData.image} 
              alt="background layer" 
              className="absolute w-[80%] h-[70%] object-cover rounded shadow-md transform -rotate-3 opacity-30 grayscale blur-[1px] transition-all duration-500" 
            />
            <img 
              key={activeData.year}
              src={activeData.image} 
              alt={activeData.heading} 
              className="relative z-10 w-[90%] h-[75%] object-cover rounded shadow-xl border-[6px] border-white transform rotate-2 animate-fade-in" 
            />
          </div>

          <div className="w-7/12 p-10 lg:p-14 flex flex-col h-full overflow-y-auto">
            <div className="flex items-center gap-2 text-[#9A2A2B] font-bold text-xs uppercase tracking-widest mb-4">
              <MapPin size={16} /> {activeData.location}
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl text-[#2C0A0B] leading-[1.1] mb-6 font-bold">
              {activeData.heading.split('&').map((text, i) => (
                <React.Fragment key={i}>
                  {text} {i === 0 && <span className="text-[#E8B036]">&</span>} <br/>
                </React.Fragment>
              ))}
            </h2>

            <div className="flex flex-wrap gap-3 mb-8">
              {activeData.tags.map(tag => (
                <span key={tag} className="bg-[#FDF8EE] text-[#8C3F42] border border-[#F3E6D0] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rotate-45 bg-[#E8B036]"></div>
                <h4 className="font-bold text-[#8C3F42] uppercase text-sm tracking-wider">Bối cảnh lịch sử</h4>
              </div>
              <ul className="space-y-3 pl-4 border-l border-gray-200 ml-1">
                {activeData.context.map((para, i) => (
                  <li key={i} className="text-gray-600 text-[15px] leading-relaxed relative pl-4">
                    <span className="absolute left-[-21px] top-2 w-[6px] h-[6px] rounded-full bg-gray-300"></span>
                    {para}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL THÀNH VIÊN, AI & LIÊN HỆ THỰC TẾ ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setShowModal(false)}>
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="bg-[#2C0A0B] p-6 flex justify-between items-center relative shrink-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8B036] opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="font-display text-2xl text-[#E8B036] uppercase tracking-wider relative z-10">Phụ lục Đồ án VNR202</h3>
              <button onClick={() => setShowModal(false)} className="text-white hover:text-red-400 transition-colors relative z-10">
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Khung cuộn nội dung */}
            <div className="p-6 md:p-8 overflow-y-auto">
              
              {/* Nhóm Thực Hiện */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 text-[#8C3F42] border-b border-gray-100 pb-2">
                  <Users size={20} />
                  <h4 className="font-bold uppercase tracking-wider">Nhóm Thực Hiện</h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MEMBERS.map(m => (
                    <li key={m} className="flex items-center gap-3 text-gray-700 bg-gray-50 px-4 py-2.5 rounded-lg text-sm border border-gray-100">
                      <div className="w-1.5 h-1.5 bg-[#E8B036] rounded-full"></div> {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Minh Bạch AI (Chi tiết) */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 text-[#8C3F42] border-b border-gray-100 pb-2">
                  <Sparkles size={20} />
                  <h4 className="font-bold uppercase tracking-wider">Minh Bạch Sử Dụng Công Cụ AI</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl">
                    <p className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-sm"><span>🧠</span> LLM: Google Gemini</p>
                    <ul className="text-sm text-gray-600 leading-relaxed space-y-1.5 list-disc pl-5">
                      <li>Đóng vai trò trợ lý nội dung: Phân tích, tóm tắt các mốc thời gian lịch sử từ giáo trình để đưa vào giao diện.</li>
                      <li>Hỗ trợ <i>Brainstorming</i> ý tưởng Game hóa (Gamification) và cơ chế tính điểm/kỹ năng chéo cho đồ án.</li>
                      <li>Biên soạn và đối chiếu bộ 15 câu hỏi trắc nghiệm Lịch sử Đảng đảm bảo tính chính xác và bám sát tiến trình lịch sử.</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-xl">
                    <p className="font-bold text-purple-800 mb-2 flex items-center gap-2 text-sm"><span>💻</span> LLM: Anthropic Claude</p>
                    <ul className="text-sm text-gray-600 leading-relaxed space-y-1.5 list-disc pl-5">
                      <li>Đóng vai trò kỹ sư phần mềm (SWE): Trực tiếp lập trình hệ thống mã nguồn bằng ReactJS.</li>
                      <li>Thiết kế Layout dạng Split-Screen, tích hợp CSS Tailwind và tái hiện bảng màu chuẩn mực của giao diện lịch sử quốc tế.</li>
                      <li>Xử lý logic State Management, luồng dữ liệu thời gian thực (Firebase) và hiệu ứng chuyển cảnh (Animations).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Liên Hệ Thực Tế (Bỏ icon) */}
              <div>
                <div className="flex items-center mb-4 text-[#8C3F42] border-b border-gray-100 pb-2">
                  <h4 className="font-bold uppercase tracking-wider">Liên Hệ Thực Tế & Giá Trị Cốt Lõi</h4>
                </div>
                <div className="bg-[#FDF8EE] border border-[#F3E6D0] p-5 rounded-xl">
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    <strong>Số hóa và Game hóa Giáo dục (EdTech):</strong> Sản phẩm là minh chứng cho việc ứng dụng công nghệ để giải quyết bài toán giảng dạy các môn lý luận chính trị và lịch sử. Bằng cách thay thế phương pháp học thụ động qua trang sách bằng <strong>Không gian 3D Thực tế ảo (Viverse)</strong> kết hợp với <strong>Trò chơi cạnh tranh (Caro Nhân Phẩm)</strong>, nhóm hướng tới việc tạo ra môi trường học tập trực quan, sinh động. Sinh viên khối ngành kỹ thuật không chỉ tiếp thu kiến thức Lịch sử Đảng một cách tự nhiên mà còn chủ động tương tác, khắc sâu tiến trình lịch sử dân tộc.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        /* Tùy chỉnh thanh cuộn cho Modal mượt mà hơn */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}