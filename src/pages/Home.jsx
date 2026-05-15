import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-be-vietnam text-slate-800 bg-white">
      
      {/* ── 1. HERO SECTION (Hiện đại, Gradient nhẹ) ── */}
      <div className="relative pt-20 pb-32 lg:pt-28 lg:pb-40 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-slate-50">
        {/* Nền trang trí */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-[120px]"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Cột trái: Văn bản */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 text-sm font-bold px-4 py-2.5 rounded-full mb-8 shadow-sm border border-blue-100/50">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                Sản xuất trực tiếp tại xưởng
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6">
                Xưởng Thùng Carton <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                  KhanhBox
                </span>
                <span className="inline-block animate-wave ml-3">👋</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10">
                Chuyên sản xuất thùng 3 lớp, 5 lớp và hộp COD theo đúng kích thước bạn cần. Giải pháp đóng gói <strong className="text-blue-600 font-semibold">tiết kiệm chi phí và giao hàng siêu nhanh</strong> ngay tại xưởng.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link to="/san-pham" className="w-full sm:w-auto bg-blue-600 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2">
                  <span>📦</span> Xem mẫu sản phẩm
                </Link>
                <Link to="/lien-he" className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-700 font-semibold text-base px-8 py-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300">
                  <span>💬</span> Nhận tư vấn Zalo
                </Link>
              </div>
            </div>

            {/* Cột phải: Hình ảnh thực tế */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-[6px] border-white z-10 group">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src="/images/bgr.png" 
                  alt="Xưởng sản xuất thùng KhanhBox"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 lg:-bottom-10 lg:-left-12 bg-white/90 backdrop-blur-md p-4 lg:p-5 rounded-3xl shadow-xl border border-white flex gap-4 items-center pr-8 z-20 animate-[bounce_3s_infinite]">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 text-orange-500 w-14 h-14 flex items-center justify-center text-3xl rounded-2xl shadow-inner">
                  🏭
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Cam kết của xưởng</p>
                  <p className="text-base font-extrabold text-slate-800">Không qua trung gian</p>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 z-0 text-blue-200">
                <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                  </pattern>
                  <rect x="0" y="0" width="100" height="100" fill="url(#dots)"></rect>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 2. STATS SECTION (Overlap Hero) ── */}
      <div className="container mx-auto px-4 relative z-30 -mt-20">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { num: '100%', label: 'Giá gốc tận xưởng', d: 'Giá luôn tốt nhất vì tự sản xuất.' },
              { num: '24h', label: 'Giao hàng siêu tốc', d: 'Hỗ trợ đẩy nhanh tiến độ khi gấp.' },
              { num: 'Mọi', label: 'Kích thước yêu cầu', d: 'Bạn cần size nào, KhanhBox làm size đó.' },
            ].map((s, i) => (
              <div key={i} className="pt-6 md:pt-0 md:px-8 first:pt-0 first:px-0 last:pb-0 group">
                <div className="flex items-start md:items-center gap-5">
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 group-hover:scale-110 transition-transform origin-left">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{s.label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. LỢI THẾ CỦA CHÚNG TÔI (Bento Grid Style) ── */}
      <div className="py-24 bg-slate-50 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-bold text-orange-500 bg-orange-100 px-4 py-1.5 rounded-full inline-block mb-4 uppercase tracking-wider">
              Vì sao chọn chúng tôi?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Điểm cộng của KhanhBox 🥰
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card Lớn */}
            <div className="md:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:-translate-y-1 transition-transform">
                  🤝
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Giá cả hợp lý, minh bạch</h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-md">
                  Cam kết mức giá tốt nhất khu vực nhờ quy trình làm việc tối ưu và báo giá minh bạch ngay từ đầu. Không phí ẩn, không qua trung gian.
                </p>
              </div>
            </div>

            {/* Card Nhỏ 1 */}
            <div className="md:col-span-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-orange-100 text-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:-translate-y-1 transition-transform">
                📐
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Chuẩn từng milimet</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kích thước chính xác đến từng mm cho mọi dòng hộp COD, giúp đóng gói hàng hóa vừa vặn nhất.
              </p>
            </div>

            {/* Card Nhỏ 2 (Căn giữa hàng dưới hoặc full width trên mobile) */}
            <div className="md:col-span-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 md:p-10 rounded-[2rem] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:rotate-12 transition-transform">
                  ⚡
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Hỗ trợ nhiệt tình, làm nhanh</h3>
                  <p className="text-blue-100 max-w-2xl">
                    Luôn sẵn sàng lắng nghe và đáp ứng kịp thời các đơn hàng gấp để công việc của bạn không bị gián đoạn.
                  </p>
                </div>
              </div>
              <Link to="/lien-he" className="shrink-0 bg-white text-blue-600 font-bold py-3 px-6 rounded-xl hover:bg-orange-500 hover:text-white transition-colors">
                Liên hệ ngay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. SẢN PHẨM & DỊCH VỤ (Marquee + Lưới sản phẩm) ── */}
      <div className="bg-white py-24 border-t border-slate-100 overflow-hidden relative">
        
        {/* Marquee chạy chữ nền */}
        <div className="absolute top-10 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
          <div className="flex whitespace-nowrap text-8xl font-black uppercase">
            <span className="animate-marquee inline-block">
              THÙNG CARTON • HỘP COD • BĂNG KEO • GIẤY A4 • THÙNG 3 LỚP • THÙNG 5 LỚP • 
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-xl">
                Giải pháp đóng gói toàn diện
              </h2>
            </div>
            <Link to="/san-pham" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors group">
              Xem tất cả sản phẩm 
              <span className="bg-slate-100 group-hover:bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: '📦', label: 'Thùng 3 lớp' },
              { icon: '🗂️', label: 'Thùng 5 lớp' },
              { icon: '📫', label: 'Hộp COD' },
              { icon: '🏷️', label: 'Băng keo' },
              { icon: '📄', label: 'Giấy A4' },
            ].map((p, i) => (
              <Link key={i} to="/san-pham" className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] text-center group hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-center gap-4">
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                <span className="text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {p.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. CTA / HOTLINE (Dark Theme Contrast) ── */}
      <div className="bg-white pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left relative overflow-hidden shadow-2xl">
            {/* Lớp trang trí mờ */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
            
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Bạn cần làm thùng kích thước riêng?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Đừng ngại nhắn cho KhanhBox nhé! Đội ngũ của tụi mình luôn ở đây, sẵn sàng hỗ trợ bạn tính toán và tối ưu chi phí bao bì rẻ nhất có thể.
              </p>
            </div>
            
            <div className="relative flex-shrink-0 z-10 flex flex-col items-center md:items-end">
              <a href="tel:0947088423" className="inline-flex items-center gap-3 bg-orange-500 text-white text-2xl md:text-3xl font-black px-8 py-5 rounded-2xl hover:bg-orange-400 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1 hover:shadow-orange-500/50">
                <span>📞</span> 0947.088.423
              </a>
              <p className="text-sm text-slate-400 font-medium mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Alo hoặc nhắn Zalo đều được nha!
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;