import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white font-be-vietnam">
      
      {/* ── 1. HERO SECTION (Tầm vóc thương hiệu) ── */}
      <div className="relative bg-blue-950 py-24 md:py-32 text-white overflow-hidden">
        {/* Background mờ chuyên nghiệp */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src="/images/bgr.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-6 inline-block">
            Established 2015
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-none">
            Hành trình kiến tạo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
              Giá trị bao bì Việt
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed text-blue-100/80">
            Từ một xưởng sản xuất cơ bản tại Bình Dương, KhanhBox đã vươn mình trở thành đối tác cung ứng bao bì và giải pháp đóng gói cho hơn 1.500 doanh nghiệp trên khắp cả nước.
          </p>
        </div>
      </div>

      {/* ── 2. CHỈ SỐ ẤN TƯỢNG (Stats) ── */}
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: '1.5k+', label: 'Khách hàng tin dùng' },
            { num: '500k+', label: 'Thùng sản xuất mỗi tháng' },
            { num: '09+', label: 'Năm kinh nghiệm' },
            { num: '24h', label: 'Thời gian hoàn thiện đơn' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-900 mb-1">{stat.num}</div>
              <div className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        
        {/* ── 3. CÂU CHUYỆN & GIÁ TRỊ CỐT LÕI ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-50 rounded-[40px] -z-10"></div>
            <img 
              src="/images/image.png" 
              alt="Production" 
              className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover" 
            />
            {/* Overlay badge */}
            <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl hidden md:block border border-blue-50">
               <p className="text-3xl font-black text-blue-600">"Chất lượng</p>
               <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">là nền tảng sống còn"</p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-blue-700 text-xs font-black uppercase tracking-widest">
              Về chúng tôi
            </div>
            <h2 className="text-4xl font-black text-blue-900 leading-tight uppercase tracking-tighter">
              Chúng tôi không chỉ bán thùng, <br/> chúng tôi bảo vệ sản phẩm của bạn.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Khởi đầu từ khát vọng giải quyết bài toán "Chi phí bao bì cao" của các chủ shop thương mại điện tử vào năm 2015, <strong>Xưởng Carton KhanhBox</strong> đã không ngừng cải tiến dây chuyền sản xuất tự động hóa. 
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 flex gap-4">
                <span className="text-orange-500 font-bold">01.</span>
                <span><strong>Tối ưu nguyên liệu:</strong> Chúng tôi nhập khẩu phôi giấy chất lượng cao nhưng tối ưu quy trình cắt để giảm thiểu phế phẩm, từ đó hạ giá thành tối đa cho khách hàng.</span>
              </p>
              <p className="text-gray-600 flex gap-4">
                <span className="text-orange-500 font-bold">02.</span>
                <span><strong>Độ bền vượt trội:</strong> Mỗi chiếc thùng 3 lớp hay 5 lớp tại KhanhBox đều phải qua bài kiểm tra độ bục và độ nén trước khi xuất xưởng.</span>
              </p>
              <p className="text-gray-600 flex gap-4">
                <span className="text-orange-500 font-bold">03.</span>
                <span><strong>Trách nhiệm:</strong> Chúng tôi cam kết sử dụng 100% giấy có thể tái chế, góp phần bảo vệ môi trường bền vững.</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── 4. LĨNH VỰC CHIẾN LƯỢC ── */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-blue-900 mb-4 uppercase tracking-tighter">Năng lực sản xuất</h2>
            <p className="text-gray-500 font-medium">Hệ sinh thái sản phẩm khép kín giúp khách hàng tiết kiệm thời gian và chi phí vận hành.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: "Thùng Carton Công Nghiệp", 
                desc: "Giải pháp cho các doanh nghiệp xuất khẩu và logistics với các dòng thùng 5 lớp, 7 lớp chịu lực cực cao, chống thấm tốt.",
                icon: "🏭",
                bg: "bg-blue-50"
              },
              { 
                title: "Hộp COD & Quà Tặng", 
                desc: "Dành riêng cho các shop Online với thiết kế chuẩn size các sàn TMĐT như Shopee, Lazada. Có hỗ trợ in thương hiệu sắc nét.",
                icon: "📦",
                bg: "bg-orange-50"
              },
              { 
                title: "Văn Phòng Phẩm & Phụ Kiện", 
                desc: "Sỉ lẻ giấy A4, băng keo, màng PE, xốp nổ... Đầy đủ vật tư giúp quy trình đóng gói trở nên hoàn hảo.",
                icon: "📄",
                bg: "bg-green-50"
              }
            ].map((item, index) => (
              <div key={index} className={`${item.bg} p-10 rounded-[40px] border border-transparent hover:border-white hover:shadow-2xl transition-all duration-500`}>
                <div className="text-5xl mb-8">{item.icon}</div>
                <h3 className="text-xl font-black mb-4 text-blue-900 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. TẦM NHÌN & SỨ MỆNH (Bento Style) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="md:col-span-2 bg-blue-900 p-12 md:p-16 rounded-[40px] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform">
              <svg width="150" height="150" viewBox="0 0 24 24" fill="white"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
            </div>
            <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-orange-400">Tầm nhìn 2030</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-blue-100">
              Trở thành nhà máy sản xuất bao bì carton <strong className="text-white font-black underline decoration-orange-500 underline-offset-8">tự động hóa hoàn toàn</strong> hàng đầu khu vực miền Trung, kết nối chuỗi cung ứng toàn quốc và hướng tới xuất khẩu sang các thị trường khó tính như Nhật Bản và EU.
            </p>
          </div>
          <div className="bg-orange-500 p-12 rounded-[40px] text-white">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-blue-900">Sứ mệnh</h3>
            <p className="text-lg leading-relaxed font-medium">
              Xây dựng niềm tin thông qua chất lượng sản phẩm. Chúng tôi không ngừng đổi mới để mang lại giải pháp đóng gói thông minh, bền bỉ và tiết kiệm nhất cho mọi doanh nghiệp Việt.
            </p>
          </div>
        </div>

      </div>

      {/* ── 6. LỜI MỜI HỢP TÁC (CTA) ── */}
      <div className="bg-white py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
             {/* Decor elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-orange-200"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-blue-200"></div>

            <h2 className="text-3xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter mb-8">
              Bạn sẵn sàng tối ưu <br/> quy trình đóng gói?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-12 font-medium">
              Đừng để chi phí bao bì làm giảm lợi nhuận của bạn. Hãy để KhanhBox tư vấn giải pháp phù hợp nhất về kích thước và chất liệu giấy.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://zalo.me/0947088423" className="bg-blue-700 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 uppercase tracking-widest text-sm">
                Nhận báo giá ngay
              </a>
              <Link to="/lien-he" className="bg-white text-blue-900 border border-blue-200 px-10 py-5 rounded-2xl font-black hover:bg-gray-50 transition-all uppercase tracking-widest text-sm">
                Liên hệ xưởng
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;