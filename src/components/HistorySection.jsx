import React, { useEffect } from 'react';
import genevaDivisionImage from '../assets/timeline/1954-geneva-division.jpg';
import reconstructionImage from '../assets/timeline/1954-1958-reconstruction.jpg';
import turningPointImage from '../assets/timeline/1958-1960-turning-point.jpg';
import supplyRouteImage from '../assets/timeline/1960-1965-supply-route.jpg';

const timelineGroups = [
  {
    id: 'g-1954',
    period: '1954',
    label: 'Mở cục diện mới',
    title: 'Hiệp định Giơnevơ và tình thế hai miền',
    summary: 'Đất nước tạm thời chia cắt tại vĩ tuyến 17. Miền Bắc bước vào thời kỳ khôi phục, miền Nam trở thành địa bàn đấu tranh chống Mỹ - Diệm.',
    tone: 'blue',
    image: genevaDivisionImage,
    events: [
      {
        date: '7/1954',
        title: 'Hiệp định Giơnevơ',
        text: 'Việt Nam tạm thời bị chia cắt làm hai miền. Nhiệm vụ chiến lược của cách mạng phải thích ứng với tình thế mới.',
      },
      {
        date: '10/10/1954',
        title: 'Tiếp quản Thủ đô',
        text: 'Những lính Pháp cuối cùng rút khỏi Hà Nội, mở đầu quá trình ổn định miền Bắc sau chiến tranh.',
      },
      {
        date: '16/5/1955',
        title: 'Pháp rút khỏi miền Bắc',
        text: 'Toàn bộ quân đội viễn chinh Pháp và tay sai rút khỏi miền Bắc theo Hiệp định Giơnevơ.',
      },
    ],
    takeaway: 'Bài học mở đầu: một bối cảnh mới đòi hỏi một đường lối mới, không thể dùng nguyên cách làm của giai đoạn trước.',
  },
  {
    id: 'g-1954-1958',
    period: '1954-1958',
    label: 'Củng cố hậu phương',
    title: 'Miền Bắc khôi phục kinh tế, ổn định xã hội',
    summary: 'Miền Bắc tập trung hàn gắn vết thương chiến tranh, khôi phục nông nghiệp, sửa sai cải cách ruộng đất và chuẩn bị cơ sở cho xây dựng CNXH.',
    tone: 'gold',
    image: reconstructionImage,
    events: [
      {
        date: '1954-1957',
        title: 'Nông nghiệp là trọng tâm',
        text: 'Đảng tập trung khôi phục sản xuất nông nghiệp, đồng thời phục hồi công nghiệp, tiểu thủ công nghiệp và giao thông vận tải.',
      },
      {
        date: '7/1956',
        title: 'Cải cách ruộng đất căn bản hoàn thành',
        text: 'Chế độ chiếm hữu ruộng đất phong kiến bị xóa bỏ; hơn 9 triệu người được chia hơn 810.000 ha ruộng đất.',
      },
      {
        date: '9/1956',
        title: 'Kiểm điểm và sửa sai',
        text: 'Hội nghị Trung ương 10 nghiêm khắc kiểm điểm sai lầm cải cách ruộng đất, công khai tự phê bình và chỉ đạo sửa sai.',
      },
    ],
    takeaway: 'Bài học quản trị: xây dựng sức mạnh lâu dài phải bắt đầu từ ổn định nền tảng và dám sửa sai khi thực tiễn chỉ ra hạn chế.',
  },
  {
    id: 'g-1958-1960',
    period: '1958-1960',
    label: 'Chuyển hóa lực lượng',
    title: 'Miền Bắc cải tạo XHCN, miền Nam chuyển sang thế tiến công',
    summary: 'Miền Bắc thực hiện cải tạo xã hội chủ nghĩa; miền Nam từ giữ gìn lực lượng chuyển sang kết hợp đấu tranh chính trị với vũ trang.',
    tone: 'red',
    image: turningPointImage,
    events: [
      {
        date: '1958-1960',
        title: 'Cải tạo xã hội chủ nghĩa',
        text: 'Thực hiện kế hoạch ba năm phát triển kinh tế, văn hóa và cải tạo xã hội chủ nghĩa đối với các thành phần kinh tế.',
      },
      {
        date: '4/1959',
        title: 'Ba nguyên tắc hợp tác xã',
        text: 'Hội nghị Trung ương 16 xác định tự nguyện, cùng có lợi và quản lý dân chủ là nguyên tắc xây dựng hợp tác xã.',
      },
      {
        date: '1/1959',
        title: 'Nghị quyết Trung ương 15',
        text: 'Cho phép dùng bạo lực cách mạng, kết hợp đấu tranh chính trị với đấu tranh vũ trang để chống bạo lực phản cách mạng.',
      },
      {
        date: '17/1/1960',
        title: 'Đồng khởi Mỏ Cày - Bến Tre',
        text: 'Phong trào Đồng khởi bùng nổ, gắn với Nguyễn Thị Định, chuyển cách mạng miền Nam từ giữ gìn lực lượng sang thế tiến công.',
      },
    ],
    takeaway: 'Điểm nhấn thuyết trình: Nghị quyết Trung ương 15 là bước ngoặt thể hiện khả năng thích ứng chiến lược của Đảng.',
  },
  {
    id: 'g-1960-1965',
    period: '1960-1965',
    label: 'Phối hợp hai miền',
    title: 'Đại hội III, chi viện miền Nam và đánh bại Chiến tranh đặc biệt',
    summary: 'Đại hội III hoàn chỉnh đường lối hai chiến lược cách mạng. Miền Bắc xây dựng hậu phương, miền Nam trực tiếp đánh bại chiến lược Chiến tranh đặc biệt.',
    tone: 'blue',
    image: supplyRouteImage,
    events: [
      {
        date: '9/1960',
        title: 'Đại hội III',
        text: 'Miền Bắc giữ vai trò quyết định nhất, miền Nam giữ vai trò quyết định trực tiếp đối với sự nghiệp thống nhất.',
      },
      {
        date: '1961-1965',
        title: 'Kế hoạch 5 năm và chi viện',
        text: 'Miền Bắc xây dựng bước đầu cơ sở vật chất của CNXH, đồng thời tăng cường chi viện người và vật chất cho tiền tuyến.',
      },
      {
        date: '1961',
        title: 'Chiến tranh đặc biệt',
        text: 'Mỹ triển khai công thức cố vấn, vũ khí Mỹ và quân chủ lực Việt Nam Cộng hòa, lấy ấp chiến lược làm quốc sách.',
      },
      {
        date: '2/1/1963',
        title: 'Chiến thắng Ấp Bắc',
        text: 'Quân dân miền Nam chứng minh có thể đánh bại các chiến thuật hiện đại như trực thăng vận và thiết xa vận.',
      },
      {
        date: '1964-1965',
        title: 'Bình Giã - Ba Gia - Đồng Xoài',
        text: 'Các thắng lợi lớn làm lung lay quân đội Sài Gòn, hệ thống ấp chiến lược và đô thị, khiến Chiến tranh đặc biệt phá sản.',
      },
    ],
    takeaway: 'Kết luận chính: sức mạnh đến từ sự kết hợp giữa hậu phương ổn định và tiền tuyến chủ động tiến công.',
  },
];

const northPoints = [
  'Củng cố hậu phương sau chiến tranh, ổn định đời sống nhân dân.',
  'Khôi phục sản xuất nông nghiệp, công nghiệp, giao thông vận tải.',
  'Cải tạo xã hội chủ nghĩa và xây dựng quan hệ sản xuất mới.',
  'Thực hiện Kế hoạch nhà nước 5 năm lần thứ nhất, làm hậu thuẫn cho miền Nam.',
];

const southPoints = [
  'Từ đấu tranh chính trị, giữ gìn lực lượng trong điều kiện đàn áp khốc liệt.',
  'Chuyển sang thế tiến công sau Nghị quyết Trung ương 15.',
  'Kết hợp đấu tranh chính trị, vũ trang và binh vận trên ba vùng chiến lược.',
  'Đánh bại chiến lược Chiến tranh đặc biệt, tạo thế mới cho cách mạng miền Nam.',
];

const facts = [
  { value: '810.000 ha', label: 'ruộng đất chia cho nông dân trong cải cách ruộng đất' },
  { value: '17.000', label: 'ấp chiến lược địch dự định lập ở miền Nam' },
  { value: '9 lần', label: 'mức tăng bộ đội miền Bắc vào miền Nam năm 1965 so với 1961' },
  { value: '10 lần', label: 'mức tăng vật chất chi viện năm 1965 so với 1961' },
];

const HistorySection = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -80px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="top" className="hero-section cinematic-hero">
        <div className="hero-content" data-reveal>
          <p className="eyebrow">VNR202 - Chương 2</p>
          <h1>Sự lãnh đạo của Đảng đối với cách mạng hai miền Nam - Bắc</h1>
          <p className="hero-subtitle">
            Giai đoạn 1954-1965 được kể lại như một dòng thời gian: từ chia cắt đất nước, củng cố hậu phương, chuyển thế tiến công đến đánh bại Chiến tranh đặc biệt.
          </p>
          <div className="hero-actions" aria-label="Liên kết nhanh">
            <a className="btn btn-primary" href="#timeline">Khám phá timeline</a>
            <a className="btn btn-secondary" href="#chien-luoc">Tóm tắt hai miền</a>
          </div>
        </div>

        <aside className="history-canvas" aria-label="Dòng thời gian 1954-1965" data-reveal>
          <div className="canvas-orbit" />
          {timelineGroups.map((group, index) => (
            <a
              className={`canvas-node node-${index + 1}`}
              href={`#${group.id}`}
              key={group.id}
              aria-label={`Đi tới ${group.period}`}
            >
              <span>{group.period}</span>
            </a>
          ))}
          <div className="canvas-card">
            <span>1954-1965</span>
            <h2>Hai nhiệm vụ, một mục tiêu</h2>
            <p>Miền Bắc là hậu phương vững chắc. Miền Nam là tiền tuyến trực tiếp. Cả hai cùng hướng tới thống nhất đất nước.</p>
          </div>
        </aside>
      </section>

      <section id="boi-canh" className="section">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">1. Bối cảnh</p>
          <h2>Sau Hiệp định Giơnevơ, cách mạng Việt Nam đứng trước tình thế mới</h2>
          <p>
            Đất nước tạm thời bị chia cắt, mỗi miền có nhiệm vụ khác nhau nhưng gắn bó trong mục tiêu chung: hòa bình, độc lập, thống nhất Tổ quốc.
          </p>
        </div>

        <div className="context-grid">
          <article className="card reveal-card" data-reveal>
            <span className="card-kicker">Thuận lợi</span>
            <h3>Có hậu phương miền Bắc và ý chí thống nhất</h3>
            <ul>
              <li>Miền Bắc hoàn toàn giải phóng, trở thành căn cứ địa của cả nước.</li>
              <li>Phong trào giải phóng dân tộc và lực lượng xã hội chủ nghĩa trên thế giới phát triển.</li>
              <li>Nhân dân cả nước có ý chí độc lập, thống nhất sau chín năm kháng chiến.</li>
            </ul>
          </article>

          <article className="card reveal-card" data-reveal>
            <span className="card-kicker">Khó khăn</span>
            <h3>Mỹ trở thành kẻ thù trực tiếp</h3>
            <ul>
              <li>Miền Nam bị biến thành thuộc địa kiểu mới và căn cứ quân sự của Mỹ.</li>
              <li>Chính quyền Ngô Đình Diệm đàn áp phong trào cách mạng, phá hoại tổng tuyển cử.</li>
              <li>Kinh tế miền Bắc nghèo nàn, lạc hậu, hậu quả chiến tranh còn nặng nề.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="timeline" className="timeline-stage">
        <div className="section-heading timeline-heading" data-reveal>
          <p className="eyebrow">2. Timeline canvas</p>
          <h2>Dòng thời gian theo từng chặng lịch sử</h2>
          <p>Mỗi chapter gồm mốc sự kiện, ý nghĩa và thông điệp cần nói khi thuyết trình.</p>
        </div>

        <div className="timeline-layout">
          <nav className="timeline-rail" aria-label="Các chặng timeline">
            {timelineGroups.map((group) => (
              <a href={`#${group.id}`} key={group.id}>
                <span>{group.period}</span>
                <small>{group.label}</small>
              </a>
            ))}
          </nav>

          <div className="chapter-list">
            {timelineGroups.map((group, index) => (
              <article
                className={`timeline-chapter tone-${group.tone}`}
                id={group.id}
                key={group.id}
                data-reveal
              >
                <div className="chapter-visual">
                  <img src={group.image} alt="" loading="lazy" />
                  <div className="chapter-image-overlay" aria-hidden="true" />
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <i aria-hidden="true" />
                </div>

                <div className="chapter-content">
                  <p className="chapter-kicker">{group.period} / {group.label}</p>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>

                  <div className="event-grid">
                    {group.events.map((event) => (
                      <div className="event-card" key={`${group.id}-${event.date}-${event.title}`}>
                        <time>{event.date}</time>
                        <h4>{event.title}</h4>
                        <p>{event.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="takeaway">
                    <strong>Ý nghĩa</strong>
                    <span>{group.takeaway}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="chien-luoc" className="section">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">3. Đường lối hai miền</p>
          <h2>Tiến hành đồng thời hai chiến lược cách mạng</h2>
          <p>Đại hội III của Đảng hoàn chỉnh đường lối chung: miền Bắc giữ vai trò quyết định nhất, miền Nam giữ vai trò quyết định trực tiếp.</p>
        </div>

        <div className="strategy-grid">
          <article className="strategy-card north" data-reveal>
            <span className="card-kicker">Miền Bắc</span>
            <h3>Xây dựng CNXH, làm hậu phương vững mạnh</h3>
            <ul>
              {northPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="strategy-card south" data-reveal>
            <span className="card-kicker">Miền Nam</span>
            <h3>Đấu tranh giải phóng, chuyển sang thế tiến công</h3>
            <ul>
              {southPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="fact-grid">
          {facts.map((fact) => (
            <div className="fact-card" key={fact.value} data-reveal>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>

        <div className="conclusion-box" data-reveal>
          <h3>Kết luận phần lý thuyết</h3>
          <p>
            Điểm sáng của giai đoạn này là năng lực thích ứng chiến lược: Đảng không áp dụng một phương thức cứng nhắc, mà thay đổi cách đấu tranh theo tương quan lực lượng, địa bàn và thời cơ lịch sử.
          </p>
        </div>
      </section>
    </>
  );
};

export default HistorySection;
