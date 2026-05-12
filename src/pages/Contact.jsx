import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📞',
      label: 'Hotline báo giá',
      value: '0947.088.423',
      note: 'Lê Văn Khánh — Gọi trực tiếp 24/7',
      color: 'bg-blue-50',
      action: 'tel:0985374854'
    },
    {
      icon: '💬',
      label: 'Zalo tư vấn',
      value: '0947.088.423',
      note: 'Nhắn tin để nhận báo giá kèm ảnh mẫu',
      color: 'bg-green-50',
      action: 'https://zalo.me/0985374854'
    },
    {
      icon: '📍',
      label: 'Địa chỉ xưởng',
      value: 'Thôn Liên Trì, Xã Bình Hiệp, Huyện Bình Sơn, Quảng Ngãi', // Vũ điền địa chỉ thật vào đây nhé
      note: 'Mở cửa: 07:30 - 17:30 (Thứ 2 - Thứ 7)',
      color: 'bg-orange-50',
      action: 'https://www.google.com/maps'
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-be-vietnam">
      
      {/* ── HEADER ── */}
      <div className="bg-white border-b py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[11px] font-black text-orange-500 uppercase tracking-[0.2em] mb-4 inline-block">
            ✦ Kết nối với KhanhBox ✦
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter mb-4">
            Liên hệ đặt hàng
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Quý khách cần tư vấn quy cách thùng, báo giá số lượng lớn hoặc đặt in logo thương hiệu? 
            Hãy liên hệ với chúng tôi qua các kênh dưới đây.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          {/* ── CONTACT CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <a 
                href={item.action}
                key={index}
                target={item.icon === '💬' ? "_blank" : "_self"}
                rel="noreferrer"
                className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 group"
              >
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">
                  {item.label}
                </span>
                <h3 className="text-xl font-black text-blue-900 mb-3 break-words">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {item.note}
                </p>
              </a>
            ))}
          </div>

          {/* ── MAP & FORM AREA ── */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
            
            {/* Cột trái: Lời nhắn */}
            <div className="p-10 md:p-16 flex-1 bg-blue-900 text-white">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">
                Xưởng sản xuất<br/>Trực tiếp
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-orange-400 font-bold">✓</span>
                  <p className="text-blue-100 text-sm">Hỗ trợ thiết kế và làm mẫu miễn phí cho đơn hàng lớn.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-bold">✓</span>
                  <p className="text-blue-100 text-sm">Giao hàng tận nơi khu vực nội thành và các tỉnh lân cận.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-orange-400 font-bold">✓</span>
                  <p className="text-blue-100 text-sm">Xuất hóa đơn VAT đầy đủ theo yêu cầu doanh nghiệp.</p>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-blue-800">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Đại diện kinh doanh</p>
                <p className="text-xl font-black">Lê Văn Khánh</p>
              </div>
            </div>

            {/* Cột phải: Bản đồ (Placeholder) */}
            <div className="flex-1 bg-gray-200 min-h-[350px] relative">
               {/* Thay src iframe dưới đây bằng mã nhúng bản đồ Google Maps của xưởng Vũ */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1056581958616!2d108.2097144758535!3d16.05995433971485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b42bf11f2d%3A0x6968037a3465e9!2sDanang%20International%20Airport!5e0!3m2!1sen!2svn!4v1700000000000!5m2!1sen!2svn" 
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ xưởng KhanhBox"
              ></iframe>
            </div>

          </div>

          {/* ── FOOTER QUẢNG CÁO ── */}
          <div className="mt-20 text-center">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">Đối tác vận chuyển tin cậy</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
              <span className="text-2xl font-black text-gray-800">GHTK</span>
              <span className="text-2xl font-black text-gray-800">Viettel Post</span>
              <span className="text-2xl font-black text-gray-800">J&T Express</span>
              <span className="text-2xl font-black text-gray-800">GHN</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;