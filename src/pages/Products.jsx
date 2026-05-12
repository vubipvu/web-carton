import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get('cat');

  // Khởi tạo state dựa trên URL hoặc mặc định là 'Tất cả'
  const [filter, setFilter] = useState(catQuery || 'Tất cả');

  // Lắng nghe thay đổi từ URL để cập nhật bộ lọc (ví dụ khi nhấn từ Sidebar Menu ngoài Navbar)
  useEffect(() => {
    setFilter(catQuery || 'Tất cả');
  }, [catQuery]);

  const categories = ['Tất cả', 'Hộp Carton', 'Thùng Carton', 'Băng Keo', 'Văn Phòng Phẩm'];

  // Logic lọc danh sách sản phẩm
  const filteredProducts = filter === 'Tất cả' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* SIDEBAR BÊN TRÁI - THIẾT KẾ GỌN GÀNG */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-28">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 border-b pb-2">
              Danh mục sản phẩm
            </h2>
            <div className="flex flex-col space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setSearchParams(cat === 'Tất cả' ? {} : { cat });
                  }}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    filter === cat 
                      ? 'bg-blue-700 text-white shadow-lg shadow-blue-100' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Thông tin hỗ trợ nhanh */}
            <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter mb-1">Liên hệ báo giá</p>
              <p className="text-blue-800 font-black text-lg">0947.088.423</p>
            </div>
          </div>
        </aside>

        {/* PHẦN HIỂN THỊ SẢN PHẨM BÊN PHẢI */}
        <main className="flex-1">
          <div className="flex items-baseline justify-between mb-8">
            <h1 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">
              {filter}
            </h1>
            <p className="text-gray-400 text-xs italic">
              Có {filteredProducts.length} sản phẩm được tìm thấy
            </p>
          </div>

          {/* Grid sản phẩm - Tự động thay đổi số cột tùy màn hình */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="hover:translate-y-[-4px] transition-transform duration-300">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Thông báo khi không có sản phẩm */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">Hiện chưa có sản phẩm nào trong danh mục này.</p>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default Products;