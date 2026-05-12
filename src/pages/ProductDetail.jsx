import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Tìm sản phẩm dựa trên ID từ URL
  const product = products.find(p => p.id === parseInt(id));

  // 1. Logic xử lý ảnh Gallery
  // Ưu tiên mảng images, nếu không có thì dùng ảnh chính
  const productImages = product?.images || (product ? [product.image] : []);
  
  // State quản lý ảnh đang hiển thị
  const [activeImage, setActiveImage] = useState(productImages[0]);

  // 2. QUAN TRỌNG: Sửa lỗi ảnh không khớp khi đổi sản phẩm
  useEffect(() => {
    if (product) {
      // Khi ID thay đổi, cập nhật lại ảnh chính là ảnh đầu tiên của sản phẩm mới
      setActiveImage(product.images ? product.images[0] : product.image);
      // Đồng thời cuộn trang lên đầu mượt mà
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="text-center py-40 font-be-vietnam">
        <div className="text-6xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-400">Sản phẩm không tồn tại!</h2>
        <Link to="/san-pham" className="text-blue-600 mt-4 inline-block hover:underline font-bold">
          ← Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-be-vietnam py-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb - Điều hướng */}
        <nav className="mb-8 flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
          <span className="text-gray-300">/</span>
          <Link to="/san-pham" className="hover:text-blue-600 transition-colors">Sản phẩm</Link>
          <span className="text-gray-300">/</span>
          <span className="text-blue-900">{product.name}</span>
        </nav>

        <div className="bg-white rounded-[48px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* ── BÊN TRÁI: GALLERY ẢNH ── */}
            <div className="p-4 md:p-10 bg-gray-50/30">
              <div className="relative aspect-square rounded-[32px] overflow-hidden bg-white border border-gray-100 shadow-inner group">
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-blue-900 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Xưởng KhanhBox
                </div>
              </div>

              {/* Thumbnails - Chỉ hiện nếu có nhiều hơn 1 ảnh */}
              {productImages.length > 1 && (
                <div className="flex justify-center gap-4 mt-8">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-white ${
                        activeImage === img ? 'border-orange-500 scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── BÊN PHẢI: THÔNG TIN CHI TIẾT ── */}
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-700 text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                  Mã: #VT-{product.id}
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-blue-950 leading-[1.1] mb-6 uppercase tracking-tighter">
                {product.name}
              </h1>
              
              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                {product.description}
              </p>

              {/* Thông số Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Kích thước</p>
                  <p className="text-blue-900 font-black text-lg">{product.size}</p>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-2">Chất liệu</p>
                  <p className="text-orange-600 font-black text-lg">{product.paperType || "Cao cấp"}</p>
                </div>
              </div>

              {/* Nút hành động chính */}
              <div className="space-y-4">
                <a 
                  href={`https://zalo.me/0985374854?text=Chào KhanhBox, tôi muốn báo giá sản phẩm: ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-700 text-white w-full py-5 rounded-[20px] font-black text-lg uppercase tracking-widest hover:bg-orange-500 transition-all duration-500 shadow-xl shadow-blue-100 hover:shadow-orange-100 active:scale-95"
                >
                  💬 Liên hệ báo giá ngay
                </a>
                
                <div className="flex gap-4">
                  <a 
                    href="tel:0985374854"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-4 rounded-[20px] font-black text-xs text-gray-600 hover:bg-gray-50 transition-all uppercase tracking-widest"
                  >
                    📞 Gọi tư vấn
                  </a>
                  <button 
                    onClick={() => window.print()}
                    className="px-8 border-2 border-gray-100 py-4 rounded-[20px] font-bold text-gray-400 hover:bg-gray-50 transition-all"
                  >
                    🖨️
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 py-6 border-t border-gray-50">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>)}
                 </div>
                 <p className="text-[11px] text-gray-400 font-bold">Hơn 500+ khách hàng đã tin dùng sản phẩm này</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── SẢN PHẨM TƯƠNG TỰ ── */}
        <div className="mt-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em]">Hệ sinh thái</span>
              <h2 className="text-4xl font-black text-blue-950 uppercase tracking-tighter mt-2">Sản phẩm tương tự</h2>
            </div>
            <Link to="/san-pham" className="text-xs font-black text-blue-600 border-b-2 border-blue-600 pb-1 hover:text-orange-500 hover:border-orange-500 transition-all uppercase tracking-widest">
              Xem tất cả →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Link 
                  key={item.id} 
                  to={`/san-pham/${item.id}`} 
                  className="group"
                >
                  <div className="bg-white rounded-[32px] p-4 border border-transparent transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:border-blue-50 group-hover:-translate-y-2">
                    <div className="aspect-square overflow-hidden rounded-[24px] bg-gray-50 mb-6">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    <div className="px-2">
                      <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-black text-blue-900 group-hover:text-blue-700 transition-colors leading-tight mb-4 h-10 line-clamp-2">
                        {item.name}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-orange-500 uppercase">Chi tiết</span>
                        <span className="text-[10px] font-bold text-gray-400 italic">#{item.id}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;