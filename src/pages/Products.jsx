import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';

// Chỉ import 1 lần duy nhất
import dataProducts from '../data/products.json';

const products = dataProducts.items || [];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // 1. LẤY TRỰC TIẾP TỪ URL: Không cần dùng useState nữa.
  // Nếu URL không có tham số 'cat', tự động hiểu là 'Tất cả'
  const currentCategory = searchParams.get('cat') || 'Tất cả';

  // 2. HIỆU ỨNG CUỘN TRANG
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentCategory]);

  const categories = [
    { name: 'Tất cả', icon: '✨' },
    { name: 'Hộp Carton', icon: '📦' },
    { name: 'Thùng Carton', icon: '🗃️' },
    { name: 'Băng Keo', icon: '🏷️' },
    { name: 'Văn Phòng Phẩm', icon: '📏' }
  ];

  // 3. LỌC SẢN PHẨM TRỰC TIẾP
  const filteredProducts = currentCategory === 'Tất cả' 
    ? products 
    : products.filter(p => p.category?.toLowerCase() === currentCategory.toLowerCase());

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-be-vietnam text-slate-800">
      
      {/* ── HEADER DANH MỤC (Dành cho Mobile) ── */}
      <div className="md:hidden bg-white border-b sticky top-0 z-20 px-4 py-3 overflow-x-auto flex gap-3 whitespace-nowrap scrollbar-hide shadow-sm">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSearchParams(cat.name === 'Tất cả' ? {} : { cat: cat.name })}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              currentCategory === cat.name 
                ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* ── SIDEBAR (Desktop) ── */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              
              {/* Menu danh mục */}
              <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-sm font-bold text-slate-800 mb-4 px-2 uppercase tracking-wider">
                  Khám phá danh mục
                </h2>
                <div className="flex flex-col space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSearchParams(cat.name === 'Tất cả' ? {} : { cat: cat.name })}
                      className={`group flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                        currentCategory.toLowerCase() === cat.name.toLowerCase()
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </div>
                      {currentCategory.toLowerCase() === cat.name.toLowerCase() && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-300"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Box hỗ trợ kỹ thuật */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 text-center relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl mx-auto mb-3 shadow-sm group-hover:-translate-y-1 transition-transform">
                    💬
                  </div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Cần hỗ trợ xíu không?</p>
                  <p className="text-lg font-bold text-slate-800 mb-5 leading-snug">Bạn cần làm thùng theo kích thước riêng?</p>
                  <a href="tel:0947088423" className="block w-full bg-orange-500 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-orange-600 hover:-translate-y-1 transition-all shadow-md hover:shadow-orange-500/30">
                    📞 Gọi KhanhBox tư vấn nha
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className="flex-1">
            {/* Header Main */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-orange-500 text-lg animate-wave">👋</span>
                  <span className="text-slate-500 font-medium text-sm">Sản phẩm của KhanhBox</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {currentCategory}
                </h1>
              </div>
              <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-xl text-sm font-semibold text-blue-700 border border-blue-100">
                Tìm thấy {filteredProducts.length} sản phẩm
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="h-full">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm mt-8">
                <div className="text-6xl mb-4 animate-[bounce_2s_infinite]">🫣</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Ối, mục này tạm thời trống!</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm mb-8 leading-relaxed">
                  KhanhBox đang chuẩn bị thêm nhiều mẫu mới cho mục này. Bạn xem thử các sản phẩm khác trong lúc chờ đợi nhé!
                </p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  Xem tất cả sản phẩm
                </button>
              </div>
            )}
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default Products;