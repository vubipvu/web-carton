import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white font-be-vietnam text-slate-800">
      
      {/* ── 1. HERO SECTION (Tầm vóc thương hiệu - Dark Theme) ── */}
      <div className="relative pt-32 pb-40 lg:pt-40 lg:pb-52 overflow-hidden bg-slate-900 text-white">
        {/* Lớp nền trang trí */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/images/bgr.png')] opacity-10 mix-blend-overlay object-cover"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-orange-400 font-bold tracking-widest uppercase text-xs">
              Established 2015
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight leading-tight">
            Hành trình kiến tạo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
              Giá trị bao bì Việt
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed text-slate-300">
            Từ một xưởng sản xuất nhỏ, KhanhBox đã vươn mình trở thành đối tác cung ứng giải pháp đóng gói chuyên nghiệp cho hơn 1.500 doanh nghiệp và chủ shop trên toàn quốc.
          </p>
        </div>
      </div>

      {/* ── 2. CHỈ SỐ ẤN TƯỢNG (Stats - Overlap Hero) ── */}
      <div className="container mx-auto px-4 relative z-20 -mt-24 mb-24">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-100">
            {[
              { num: '1.5k+', label: 'Khách hàng', desc: 'Đã phục vụ' },
              { num: '500k+', label: 'Thùng/Tháng', desc: 'Năng lực sản xuất' },
              { num: '09+', label: 'Năm hoạt động', desc: 'Kinh nghiệm' },
              { num: '24h', label: 'Hoàn thiện', desc: 'Giao hàng tốc độ' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.num}
                </div>
                <div className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1">{stat.label}</div>
                <div className="text-xs font-medium text-slate-500">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        
        {/* ── 3. CÂU CHUYỆN THƯƠNG HIỆU ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Cột Trái: Cụm hình ảnh */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-8 -left-8 w-2/3 h-full bg-blue-50 rounded-[3rem] -z-10"></div>
            <div className="absolute -top-8 -right-8 w-1/2 h-1/2 bg-orange-50 rounded-[3rem] -z-10"></div>
            
            <img 
              src="/images/bgr.png" 
              alt="Sản xuất thùng carton" 
              className="rounded-[2rem] shadow-xl w-full h-[450px] lg:h-[550px] object-cover border-4 border-white" 
            />
            
            {/* Thẻ nổi */}
            <div className="absolute bottom-10 -right-4 lg:-right-12 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-50 max-w-xs animate-[bounce_4s_infinite]">
              <div className="text-orange-500 text-4xl mb-4">"</div>
              <p className="text-lg font-bold text-slate-800 leading-snug mb-2">Chất lượng là sinh mệnh của xưởng.</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">CEO KhanhBox</p>
            </div>
          </div>

          {/* Cột Phải: Nội dung */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full text-orange-600 text-sm font-bold uppercase tracking-wider">
              Câu chuyện của chúng tôi
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Hơn cả một chiếc hộp, <br/> đó là sự bảo vệ.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Khởi đầu từ khát vọng giải quyết bài toán <strong>"Chi phí bao bì cao - Giao hàng chậm"</strong> của các chủ shop online vào năm 2015, KhanhBox đã không ngừng tự động hóa quy trình để mang lại mức giá tận gốc.
              </p>
              <p>
                Chúng tôi hiểu rằng, mỗi chiếc hộp carton khi đến tay khách hàng cuối cùng không chỉ để đựng sản phẩm, mà còn là <strong>đại sứ thương hiệu</strong> của bạn. Một chiếc hộp vuông vức, chắc chắn sẽ nâng tầm giá trị hàng hóa bên trong.
              </p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-slate-900">Cam kết vật liệu</p>
                  <p className="text-sm text-slate-500">Giấy nhập khẩu, chịu lực chống bục tốt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. GIÁ TRỊ CỐT LÕI (Bento Grid) ── */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">4 Trụ cột giá trị</h2>
            <p className="text-slate-500 text-lg">Những nguyên tắc bất di bất dịch định hình cách KhanhBox vận hành mỗi ngày.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Tối ưu chi phí', desc: 'Thiết kế khuôn bế thông minh, giảm thiểu phế phẩm giấy để hạ giá thành tối đa cho đối tác.' },
              { icon: '🛡️', title: 'Chất lượng bền bỉ', desc: 'Mọi lô hàng đều được kiểm tra độ nén (ECT) và độ bục kỹ lưỡng trước khi xuất xưởng.' },
              { icon: '⚡', title: 'Tốc độ phản hồi', desc: 'Hệ thống máy móc hiện đại cho phép chúng tôi xử lý các đơn hàng gấp rút chỉ trong 24h.' },
              { icon: '🌱', title: 'Trách nhiệm xanh', desc: 'Ưu tiên sử dụng 100% nguyên liệu giấy có khả năng tái chế, chung tay bảo vệ môi trường.' }
            ].map((val, idx) => (
              <div key={idx} className="bg-slate-50 hover:bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group flex gap-6">
                <div className="w-16 h-16 shrink-0 bg-white shadow-sm rounded-2xl flex items-center justify-center text-3xl group-hover:-translate-y-2 transition-transform duration-300">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. QUY TRÌNH LÀM VIỆC (Mới thêm) ── */}
        <div className="bg-blue-600 rounded-[3rem] p-10 lg:p-16 text-white mb-32 relative overflow-hidden">
          {/* Vòng tròn decor */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border-[30px] border-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 border-[30px] border-white/10 rounded-full"></div>

          <div className="text-center relative z-10 mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">Quy trình hợp tác 4 bước</h2>
            <p className="text-blue-100 text-lg font-medium">Nhanh gọn - Minh bạch - Chuyên nghiệp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Đường gạch ngang (chỉ hiện trên màn hình lớn) */}
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-blue-400/50 -z-10 border-dashed border-b-2 border-blue-400/50"></div>
            
            {[
              { step: '01', title: 'Tiếp nhận', desc: 'Lấy thông tin kích thước, định lượng và số lượng.' },
              { step: '02', title: 'Báo giá & Mẫu', desc: 'Chốt phương án tối ưu và cắt mẫu thực tế để test.' },
              { step: '03', title: 'Sản xuất', desc: 'Chạy hàng loạt bằng dây chuyền tự động.' },
              { step: '04', title: 'Giao hàng', desc: 'Kiểm tra chất lượng (QC) và vận chuyển tận nơi.' }
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-white text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-blue-900/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. TẦM NHÌN & SỨ MỆNH ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          <div className="lg:col-span-2 bg-slate-900 p-10 lg:p-16 rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 font-bold uppercase tracking-wider rounded-full mb-6 text-sm">
                Tầm nhìn 2030
              </span>
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-slate-300">
                Trở thành nhà máy sản xuất bao bì carton <strong className="text-white">tự động hóa</strong> hàng đầu khu vực, kết nối chuỗi cung ứng toàn quốc và hướng tới xuất khẩu sang các thị trường quốc tế.
              </p>
            </div>
          </div>
          
          <div className="bg-orange-500 p-10 lg:p-16 rounded-[2.5rem] text-white flex flex-col justify-center">
            <span className="inline-block w-fit px-4 py-1.5 bg-white/20 text-white font-bold uppercase tracking-wider rounded-full mb-6 text-sm">
              Sứ mệnh
            </span>
            <p className="text-xl leading-relaxed font-medium">
              Không ngừng đổi mới để mang lại giải pháp đóng gói thông minh, bền bỉ và tiết kiệm chi phí nhất cho sự phát triển của mọi doanh nghiệp Việt.
            </p>
          </div>
        </div>

      </div>

      {/* ── 7. LỜI MỜI HỢP TÁC (CTA) ── */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 max-w-5xl mx-auto">
            {/* Decor elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-br-[100px] -z-0"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-50 rounded-tl-[100px] -z-0"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
                Sẵn sàng để tối ưu <br className="hidden md:block" /> chi phí đóng gói?
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 font-medium">
                Đừng để chi phí bao bì làm giảm lợi nhuận của bạn. Nhắn ngay cho KhanhBox để nhận tư vấn phương án thiết kế và bảng giá sỉ tại xưởng.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="https://zalo.me/0985374854" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 text-lg">
                  💬 Nhắn tin Zalo ngay
                </a>
                <a href="tel:0985374854" className="w-full sm:w-auto bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold hover:border-orange-500 hover:text-orange-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg">
                  📞 Gọi hotline hỗ trợ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;