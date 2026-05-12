import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-be-vietnam text-gray-700">
      
      {/* ── 1. HERO SECTION (Nổi bật nhất) ── */}
      <div className="relative bg-white py-16 md:py-24 overflow-hidden border-b">
        {/* Lớp nền mờ từ ảnh bgr.png */}
        <div className="absolute inset-0 opacity-[0.03]">
          <img 
            src="/images/bgr.png" // Đây là ảnh nền bạn yêu cầu
            alt="Background KhanhBox" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Cột trái: Văn bản */}
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-orange-100">
                <span className="text-sm">✦</span> Xưởng sản xuất trực tiếp
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-900 leading-[1.05] tracking-tighter mb-5">
                Xưởng Thùng<br />
                Carton <span className="text-orange-500">KhanhBox</span>
              </h1>

              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl mb-10 font-medium">
                Sản xuất Thùng 3 lớp, 5 lớp, hộp COD theo kích thước yêu cầu. Giải pháp đóng gói <strong className="text-blue-800">tối ưu chi phí, giao hàng nhanh chóng</strong> ngay tại xưởng.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/san-pham" className="bg-blue-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-800 transition-all scale-105">
                  Xem mẫu sản phẩm →
                </Link>
                <Link to="/lien-he" className="text-blue-800 font-bold text-sm uppercase hover:text-orange-600 transition-colors">
                  Báo giá ngay
                </Link>
              </div>

              {/* Tags/Sản phẩm chính */}
              <div className="mt-12 pt-6 border-t overflow-hidden relative">
                <div className="flex gap-4 animate-marquee whitespace-nowrap">
                    {/* Nhân đôi mảng để tạo hiệu ứng chạy liên tục không ngắt quãng */}
                    {[...['Thùng 3 lớp', 'Thùng 5 lớp', 'Hộp COD', 'Băng keo', 'Giấy A4', 'Thùng carton'], 
                    ...['Thùng 3 lớp', 'Thùng 5 lớp', 'Hộp COD', 'Băng keo', 'Giấy A4', 'Thùng carton']].map((tag, i) => (
                    <span 
                        key={i} 
                        className="text-[10px] font-black text-blue-900/40 bg-gray-100/50 px-5 py-2 rounded-full uppercase tracking-widest border border-gray-100"
                    >
                        {tag}
                    </span>
                    ))}
                </div>

                {/* Lớp phủ mờ 2 đầu để tạo hiệu ứng mượt hơn */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>

            {/* Cột phải: Hình ảnh thực tế */}
            <div className="relative">
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/bgr.png" // Đây là ảnh thật bạn đã có
                  alt="Xưởng sản xuất thùng KhanhBox"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              
              {/* Badge góc dưới */}
              <div className="absolute -bottom-5 -left-5 bg-white p-2 rounded-2xl shadow-xl flex gap-3 items-center">
                <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center text-xl rounded-xl">📦</div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Quy trình</p>
                  <p className="text-sm font-black text-blue-900 uppercase tracking-tight">Sản xuất tại xưởng</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 2. STATS SECTION (Chỉ số) ── */}
      <div className="border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3">
          {[
            { num: '100%', label: 'Giá gốc xưởng', d: 'Sản xuất trực tiếp, không qua bất kỳ trung gian nào.' },
            { num: '24h', label: 'Giao hàng nhanh', d: 'Tiến độ sản xuất gấp, đáp ứng mọi đơn hàng yêu cầu.' },
            { num: '∞', label: 'Tùy chỉnh linh hoạt', d: 'Mọi kích thước, quy cách bạn yêu cầu đều được đáp ứng.' },
          ].map((s, i) => (
            <div key={i} className={`p-10 ${i < 2 ? 'md:border-r' : ''}`}>
              <div className="flex items-center gap-5">
                <span className="text-5xl font-black text-blue-600 tracking-tighter">{s.num}</span>
                <div>
                  <h3 className="text-sm font-black text-blue-900 uppercase tracking-widest">{s.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. LỢI THẾ CỦA CHÚNG TÔI ── */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <p className="text-[11px] font-black text-orange-600 uppercase tracking-widest text-center mb-3">
            Lợi thế cốt lõi
          </p>
          <h2 className="text-4xl font-black text-blue-900 text-center uppercase tracking-tighter mb-16">
            Tại sao doanh nghiệp<br/> chọn KhanhBox?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏭', t: 'Giá gốc tại xưởng', d: 'Chúng tôi cam kết mức giá tốt nhất khu vực nhờ quy trình sản xuất tối ưu.' },
              { icon: '📐', t: 'Đúng chuẩn kích thước', d: 'Chính xác đến từng mm cho mọi dòng hộp COD, thùng lớn.' },
              { icon: '⚡', t: 'Sản xuất tốc độ', d: 'Sẵn sàng đáp ứng kịp thời các đơn hàng gấp cho kịp tiến độ của bạn.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:translate-y-[-4px] transition-all group">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 tracking-tight">{c.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. SẢN PHẨM & DỊCH VỤ ── */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[11px] font-black text-orange-600 uppercase tracking-widest mb-3">
                Danh mục chính
              </p>
              <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tighter max-w-xl">
                Giải pháp đóng gói và văn phòng phẩm toàn diện
              </h2>
            </div>
            <Link to="/san-pham" className="text-sm font-bold text-blue-700 hover:text-orange-600 transition-colors mt-6 md:mt-0">
              Xem tất cả sản phẩm →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: '📦', label: 'Thùng 3 lớp', to: '/san-pham' },
              { icon: '🗂️', label: 'Thùng 5 lớp', to: '/san-pham' },
              { icon: '📫', label: 'Hộp COD', to: '/san-pham' },
              { icon: '🔧', label: 'Băng keo', to: '/san-pham' },
              { icon: '📄', label: 'Giấy A4', to: '/san-pham' },
            ].map((p, i) => (
              <Link key={i} to={p.to} className="bg-white p-8 rounded-2xl border border-gray-100 text-center group hover:bg-gray-50 hover:shadow-lg transition-all flex flex-col items-center gap-5">
                <span className="text-4xl">{p.icon}</span>
                <span className="text-sm font-black text-gray-800 uppercase tracking-tight group-hover:text-blue-700">
                  {p.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. CTA / HOTLINE (Chốt đơn) ── */}
      <div className="bg-white py-12 md:py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="bg-blue-900 text-white rounded-[40px] p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                Tư vấn nhanh & Nhận báo giá ngay
              </h2>
              <p className="text-base text-blue-100 leading-relaxed font-light">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tối ưu chi phí bao bì. Kết nối qua Zalo để có phản hồi nhanh nhất.
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <a href="tel:0947088423" className="block text-4xl lg:text-5xl font-black tracking-tighter text-white hover:text-orange-500 transition-colors">
                0947.088.423
              </a>
              <p className="text-xs text-blue-200 font-black uppercase tracking-widest text-center mt-2">Hotline Zalo</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;