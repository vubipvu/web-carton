import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col hover:shadow-lg transition bg-white">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover rounded-md" 
      />
      <h3 className="font-bold text-lg mt-4 text-blue-700">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
      
      {/* Nút Xem chi tiết - Dẫn sang trang Detail */}
      <Link 
        to={`/san-pham/${product.id}`}
        className="block text-center border border-blue-600 text-blue-600 py-2 rounded-md mb-2 hover:bg-blue-50 font-medium"
      >
        Xem chi tiết
      </Link>
      
      {/* Nút liên hệ nhanh */}
      <a 
        href="https://zalo.me/0947088423"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 text-white text-center py-2 rounded-md font-semibold hover:bg-blue-700"
      >
        Zalo: 0947.088.423
      </a>
    </div>
  );
};

// ĐÂY LÀ DÒNG BẠN ĐANG THIẾU HOẶC VIẾT SAI:
export default ProductCard;