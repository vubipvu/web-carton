import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  // Tìm sản phẩm dựa trên ID từ URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20">Sản phẩm không tồn tại!</div>;
  }

  const zaloUrl = `https://zalo.me/0947088423`;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link to="/san-pham" className="text-blue-600 mb-6 inline-block hover:underline">
        ← Quay lại danh sách
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-sm">
        {/* Hình ảnh */}
        <div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Thông tin */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold mb-2 border-b pb-2">Thông số kỹ thuật:</h3>
            <ul className="space-y-2">
              <li><strong>Kích thước:</strong> {product.size}</li>
              <li><strong>Loại giấy:</strong> {product.paperType}</li>
              <li><strong>Màu sắc:</strong> Nâu tự nhiên / Trắng</li>
              <li><strong>Tình trạng:</strong> Sẵn hàng / Đặt theo yêu cầu</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <a 
              href={zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-green-700 transition shadow-lg"
            >
              Nhận báo giá qua Zalo: 0947.088.423
            </a>
            <p className="text-sm text-center text-gray-500 italic">
              * Giá thay đổi theo số lượng đặt hàng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;