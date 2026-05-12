import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get('cat');

  // Khởi tạo và đồng bộ hóa state bộ lọc
  const [filter, setFilter] = useState(catQuery || 'Tất cả');

  useEffect(() => {
    setFilter(catQuery || 'Tất cả');
    // Tự động cuộn lên đầu trang mỗi khi thay đổi danh mục
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [catQuery]);

  const categories = ['Tất cả', 'Hộp Carton', 'Thùng Carton', 'Băng Keo', 'Văn Phòng Phẩm'];

  // Logic lọc chính xác, không phân biệt chữ hoa/thường
  const filteredProducts = filter === 'Tất cả' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="bg-gray-50 min-h-screen font-be-vietnam">
      {/* ── HEADER DANH MỤC (Dành cho Mobile) ── */}
      <div className="md:hidden bg-white border-b sticky top-0 z-20 px-4 py-4 overflow-x-auto flex gap-3 whitespace-nowrap scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams(cat === 'Tất cả' ? {} : { cat })}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filter === cat ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* ── SIDEBAR (Desktop) ── */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">
                  Danh mục hệ sinh thái
                </h2>
                <div className="flex flex-col space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSearchParams(cat === 'Tất cả' ? {} : { cat })}
                      className={`group flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                        filter.toLowerCase() === cat.toLowerCase()
                          ? 'bg-white text-blue-700 shadow-[0_10px_30px_rgba(0,0,0,0.04)] translate-x-2'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                        filter.toLowerCase() === cat.toLowerCase() ? 'bg-orange-500 scale-125' : 'bg-transparent group-hover:bg-gray-300'
                      }`}></span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Box hỗ trợ kỹ thuật */}
              <div className="p-8 rounded-[32px] bg-blue-900 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mb-2">Tư vấn kỹ thuật</p>
                  <p className="text-lg font-black mb-6 leading-tight">Bạn cần kích thước riêng?</p>
                  <a href="tel:0985374854" className="block text-center bg-white text-blue-900 py-3 rounded-xl font-black text-xs hover:bg-orange-500 hover:text-white transition-all shadow-lg">
                    GỌI TƯ VẤN NGAY
                  </a>
                </div>
                <div className="absolute -bottom-6 -right-6 text-7xl opacity-10 group-hover:rotate-12 transition-transform duration-700">📦</div>
              </div>
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className="flex-1">
            {/* Header Main */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-[2px] bg-orange-500"></span>
                  <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.3em]">Xưởng KhanhBox</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-blue-950 uppercase tracking-tighter">
                  {filter}
                </h1>
              </div>
              <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  Kết quả: <span className="text-blue-700">{filteredProducts.length} sản phẩm</span>
                </p>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group transition-all duration-500">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-40 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">📦</div>
                <h3 className="text-xl font-black text-blue-950 mb-2">Chưa tìm thấy sản phẩm</h3>
                <p className="text-gray-400 max-w-xs mx-auto text-sm font-medium">
                  Chúng tôi đang cập nhật thêm các mẫu sản phẩm mới vào danh mục này.
                </p>
                <button 
                  onClick={() => setSearchParams({})}
                  className="mt-8 px-8 py-3 bg-blue-50 text-blue-700 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 hover:text-white transition-all"
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