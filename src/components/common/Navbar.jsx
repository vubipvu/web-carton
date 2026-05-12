import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Đóng mở Sidebar chính
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Đóng mở menu con của Sản phẩm

  return (
    <>
      {/* Header chính (giữ nguyên như cũ) */}
      <nav className="bg-white shadow-sm p-4 sticky top-0 z-40 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="text-gray-700 hover:text-blue-600">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="text-xl font-bold text-blue-800 tracking-tighter">
              CARTON VŨ TRẦN
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-gray-400 uppercase text-xs">Menu Danh Mục</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 font-bold">✕</button>
          </div>

          <div className="flex flex-col">
            {/* Trang chủ */}
            <Link onClick={() => setIsOpen(false)} to="/" className="py-3 border-b font-bold text-gray-800 hover:text-blue-600">
              TRANG CHỦ
            </Link>
            
            {/* Mục Tất cả sản phẩm - Khi bấm vào sẽ đảo ngược trạng thái đóng/mở */}
            <div 
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} 
              className="py-3 border-b font-bold text-gray-800 flex justify-between items-center cursor-pointer hover:text-blue-600"
            >
              <span>TẤT CẢ SẢN PHẨM</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

                {/* Danh mục con - Chỉ hiện ra khi isSubMenuOpen là true */}
            <div className={`overflow-hidden transition-all duration-300 ${isSubMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 flex flex-col bg-gray-50">
                    <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Hộp Carton" className="py-3 text-sm text-gray-600 border-b border-gray-100 hover:text-blue-600">
                    - Hộp Carton
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Thùng Carton" className="py-3 text-sm text-gray-600 border-b border-gray-100 hover:text-blue-600">
                    - Thùng Carton
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Băng Keo" className="py-3 text-sm text-gray-600 border-b border-gray-100 hover:text-blue-600">
                    - Băng Keo
                    </Link>
                    <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Văn Phòng Phẩm" className="py-3 text-sm text-gray-600 border-b border-gray-100 hover:text-blue-600">
                    - Văn Phòng Phẩm
                    </Link>
                    
                    
                </div>
            </div>
                        <Link onClick={() => setIsOpen(false)} to="/gioi-thieu" className="py-3 border-b font-bold text-gray-800 hover:text-blue-600">
                        GIỚI THIỆU
                        </Link>
                        <Link onClick={() => setIsOpen(false)} to="/tin-tuc" className="py-3 border-b font-bold text-gray-800 hover:text-blue-600">
                        TIN TỨC
                        </Link>
            {/* Liên hệ */}
            <Link onClick={() => setIsOpen(false)} to="/lien-he" className="py-3 border-b font-bold text-gray-800 hover:text-blue-600">
              LIÊN HỆ
            </Link>
          </div>

          <div className="mt-10 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-blue-800 font-bold uppercase mb-1">Hotline tư vấn</p>
            <p className="text-lg text-blue-600 font-black">0947.088.423</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;