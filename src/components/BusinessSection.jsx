import React from 'react';

const lessons = [
  {
    title: 'Bảo toàn nguồn lực khi tình thế bất lợi',
    history: 'Giai đoạn đầu, miền Nam ưu tiên giữ gìn lực lượng, tránh đối đầu khi tương quan chưa cho phép.',
    modern: 'Doanh nghiệp khi thị trường suy giảm cần bảo vệ dòng tiền, giữ đội ngũ cốt lõi và chuẩn bị năng lực cho chu kỳ phục hồi.',
  },
  {
    title: 'Đổi chiến lược khi điều kiện thay đổi',
    history: 'Nghị quyết Trung ương 15 cho thấy sự chuyển hướng kịp thời từ đấu tranh chính trị đơn thuần sang kết hợp chính trị và vũ trang.',
    modern: 'Tổ chức phải dám thay đổi mô hình vận hành, kênh bán hàng hoặc sản phẩm khi hành vi khách hàng biến động.',
  },
  {
    title: 'Kết nối hậu phương và tiền tuyến',
    history: 'Miền Bắc vừa xây dựng, vừa chi viện để miền Nam có sức mạnh đánh bại Chiến tranh đặc biệt.',
    modern: 'Sales, marketing và chăm sóc khách hàng chỉ hiệu quả khi sản phẩm, vận hành, dữ liệu và tài chính phía sau đủ mạnh.',
  },
];

const BusinessSection = () => {
  return (
    <section id="lien-he" className="section section-muted">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">4. Liên hệ thực tiễn</p>
        <h2>Bài học về quản trị nguồn lực và khả năng thích ứng</h2>
        <p>
          Từ đường lối hai miền có thể liên hệ với cách một tổ chức hiện đại vượt qua khủng hoảng: biết giữ lực, biết đổi hướng và biết phối hợp toàn hệ thống.
        </p>
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson, index) => (
          <article className="lesson-card" key={lesson.title} data-reveal>
            <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{lesson.title}</h3>
            <p><strong>Trong lịch sử:</strong> {lesson.history}</p>
            <p><strong>Trong hiện nay:</strong> {lesson.modern}</p>
          </article>
        ))}
      </div>

      <article className="case-study" data-reveal>
        <div>
          <span className="card-kicker">Ví dụ thuyết trình</span>
          <h3>Doanh nghiệp bán lẻ gặp khủng hoảng sức mua</h3>
        </div>
        <div className="case-columns">
          <p>
            Nếu chỉ giảm giá ồ ạt, doanh nghiệp dễ mất lợi nhuận và suy yếu lâu dài. Cách tiếp cận hợp lý hơn là tạm thời giữ nguồn lực cốt lõi, tối ưu tồn kho, chăm sóc khách hàng trung thành và huấn luyện nhân sự.
          </p>
          <p>
            Khi thị trường có tín hiệu mới, doanh nghiệp chuyển sang thế chủ động: mở kênh online, bán theo gói nhỏ, dùng dữ liệu để chọn sản phẩm chủ lực. Đây là tinh thần “thích ứng theo tình thế” trong quản trị hiện đại.
          </p>
        </div>
      </article>

      <article className="discussion-box" data-reveal>
        <h3>Câu hỏi phản biện có thể chuẩn bị</h3>
        <ol>
          <li>Vì sao miền Bắc được xem là vai trò quyết định nhất, còn miền Nam là quyết định trực tiếp?</li>
          <li>Nghị quyết Trung ương 15 thể hiện năng lực thích ứng chiến lược như thế nào?</li>
          <li>Bài học “giữ gìn lực lượng” có còn phù hợp với doanh nghiệp trong môi trường cạnh tranh hiện nay không?</li>
        </ol>
      </article>
    </section>
  );
};

export default BusinessSection;
