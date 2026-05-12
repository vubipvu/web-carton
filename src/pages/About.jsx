import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero Section - Lời chào đầu */}
      <div className="relative bg-blue-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/img1.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            Hành trình 10 năm kiến tạo <br/> giá trị bao bì Việt
          </h1>
          <p className="text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Từ một xưởng sản xuất nhỏ, Vũ Trần đã vươn mình trở thành đối tác chiến lược cho hàng ngàn doanh nghiệp trong lĩnh vực đóng gói và văn phòng phẩm.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* 2. Câu chuyện thương hiệu */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-900 uppercase">Câu Chuyện Của Vũ Trần</h2>
            <div className="w-20 h-1 bg-orange-500"></div>
            <p className="text-gray-700 text-lg leading-loose">
              Khởi đầu từ những năm 2015, chúng tôi nhận thấy thị trường thương mại điện tử tại Việt Nam đang bùng nổ, kéo theo nhu cầu khổng lồ về bao bì đóng gói chất lượng. Tuy nhiên, việc tìm kiếm một đơn vị sản xuất vừa đảm bảo chất lượng, vừa có mức giá tận gốc lại không hề dễ dàng cho các chủ shop và doanh nghiệp vừa và nhỏ.
            </p>
            <p className="text-gray-700 text-lg leading-loose">
              Đó là lý do <strong>Xưởng Carton Vũ Trần</strong> ra đời. Chúng tôi tập trung vào việc tối ưu hóa quy trình sản xuất để cắt giảm mọi chi phí trung gian, mang lại lợi ích cao nhất cho khách hàng. Đối với chúng tôi, một chiếc thùng carton không chỉ là vật chứa hàng, mà là lời cam kết bảo vệ giá trị sản phẩm của bạn.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-100 rounded-2xl"></div>
            <img src="/images/img1.png" alt="Production" className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* 3. Lĩnh vực hoạt động chính */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 uppercase">Lĩnh Vực Hoạt Động</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sản xuất Bao bì", desc: "Chuyên các dòng thùng 3 lớp, 5 lớp, 7 lớp với độ bục, độ nén đạt chuẩn quốc tế.", icon: "📦" },
              { title: "Văn phòng phẩm", desc: "Cung cấp sỉ lẻ giấy A4, vật dụng văn phòng cho các công ty, xí nghiệp và trường học.", icon: "📄" },
              { title: "Vật liệu đóng gói", desc: "Băng keo siêu dính, màng PE, xốp nổ... đầy đủ giải pháp bổ trợ cho vận chuyển.", icon: "🎗️" }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-gray-100 rounded-xl hover:shadow-2xl transition-all hover:-translate-y-2 bg-white">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Tầm nhìn & Sứ mệnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="bg-blue-900 text-white p-12 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-orange-400">●</span> Tầm Nhìn
            </h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              Trở thành biểu tượng uy tín hàng đầu trong ngành bao bì tại khu vực, không ngừng cải tiến công nghệ để đưa sản phẩm Việt ra thị trường quốc tế. Chúng tôi hướng tới mục tiêu 2030 sẽ phủ sóng mạng lưới cung ứng đến tất cả các khu công nghiệp trọng điểm.
            </p>
          </div>
          <div className="bg-orange-500 text-white p-12 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-900">●</span> Sứ Mệnh
            </h3>
            <p className="text-orange-50 leading-relaxed text-lg">
              Đồng hành cùng sự phát triển của doanh nghiệp bằng cách cung cấp các sản phẩm chất lượng vượt trội với chi phí tối thiểu. Chúng tôi cam kết sử dụng nguyên liệu thân thiện với môi trường, góp phần vào sự phát triển bền vững của cộng đồng.
            </p>
          </div>
        </div>

        {/* 5. Quy trình làm việc (Bước) */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-16 uppercase">Quy Trình Hợp Tác Chuyên Nghiệp</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", t: "Tư vấn & Báo giá", d: "Tiếp nhận yêu cầu và tư vấn loại giấy phù hợp nhất." },
              { step: "02", t: "Thiết kế & Mẫu", d: "Gửi bản vẽ kỹ thuật và mẫu thử cho khách hàng kiểm duyệt." },
              { step: "03", t: "Sản xuất hàng loạt", d: "Dây chuyền tự động hóa giúp hoàn thiện đơn hàng nhanh chóng." },
              { step: "04", t: "Kiểm định & Giao", d: "Kiểm tra chất lượng kỹ càng trước khi giao đến tay khách." }
            ].map((item, i) => (
              <div key={i} className="relative p-6">
                <div className="text-6xl font-black text-blue-50 absolute -top-4 left-0 right-0 z-0">{item.step}</div>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-2 text-blue-900">{item.t}</h4>
                  <p className="text-sm text-gray-500">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Chốt bằng lời mời gọi (CTA) */}
      <div className="bg-gray-900 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Bạn đang tìm kiếm nhà cung cấp dài hạn?</h2>
        <p className="mb-10 text-gray-400">Hãy để Vũ Trần giúp bạn tối ưu chi phí bao bì ngay hôm nay.</p>
        <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-black hover:bg-orange-500 hover:text-white transition-all scale-110">
          NHẬN BÁO GIÁ QUA ZALO
        </button>
      </div>
    </div>
  );
};

export default About;