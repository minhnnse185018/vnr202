import React from 'react';

const AIUsageSection = () => {
  return (
    <section id="ai-usage" className="section section-footer">
      <div className="section-heading compact">
        <p className="eyebrow">Phụ lục</p>
        <h2>Minh bạch sử dụng AI</h2>
        <p>
          Sản phẩm có sử dụng AI để hỗ trợ lên cấu trúc, gợi ý cách trình bày và lập trình giao diện. Nhóm chịu trách nhiệm chọn lọc, kiểm chứng và trình bày nội dung dựa trên giáo trình VNR202.
        </p>
      </div>

      <div className="ai-table-wrap">
        <table className="ai-table">
          <thead>
            <tr>
              <th>Giai đoạn</th>
              <th>Nhóm thực hiện</th>
              <th>AI hỗ trợ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Định hình nội dung</td>
              <td>Chọn mục 1954-1965, đối chiếu mốc sự kiện, xác định ý nghĩa lịch sử.</td>
              <td>Gợi ý cách cô đọng nội dung thành timeline, thẻ so sánh và điểm nhấn thuyết trình.</td>
            </tr>
            <tr>
              <td>Thiết kế web</td>
              <td>Chọn kiểu trang thuyết trình, duyệt bố cục và điều chỉnh thông điệp.</td>
              <td>Hỗ trợ code React/Vite, CSS theme sáng, responsive layout và trạng thái tương tác.</td>
            </tr>
            <tr>
              <td>Chuyển mạch trình bày</td>
              <td>Rà lại các mốc 1954-1965 để trình bày theo dòng thời gian, phục vụ thuyết trình liền mạch.</td>
              <td>Hỗ trợ chuyển bộ câu hỏi thành timeline chi tiết, nhấn mạnh bối cảnh, bước ngoặt, kết quả và liên hệ thực tiễn.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prompt-box">
        <h3>Prompt tiêu biểu</h3>
        <ul>
          <li>Tạo website thuyết trình tương tác cho nội dung cách mạng hai miền Nam - Bắc 1954-1965.</li>
          <li>Chuyển giao diện sang theme sáng, dễ trình chiếu trên lớp.</li>
          <li>Bổ sung phần liên hệ thực tiễn với quản trị nguồn lực và khả năng thích ứng.</li>
          <li>Chuyển phần câu hỏi thành timeline sự kiện 1954-1965 để bài thuyết trình mạch lạc hơn.</li>
        </ul>
      </div>
    </section>
  );
};

export default AIUsageSection;
