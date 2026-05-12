import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar mobile
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // Accordion trong sidebar

  const navLinks = [
    { name: 'TRANG CHỦ', path: '/' },
    { name: 'GIỚI THIỆU', path: '/gioi-thieu' },
    { name: 'HỘP CARTON', path: '/san-pham?cat=Hộp Carton' },
    { name: 'THÙNG CARTON', path: '/san-pham?cat=Thùng Carton' },
    { name: 'BLOG BAO BÌ', path: '/tin-tuc' },
    { name: 'LIÊN HỆ', path: '/lien-he' },
  ];

  return (
    <>
      {/* 1. THANH NAVBAR CHÍNH (LUÔN CỐ ĐỊNH TRÊN CÙNG) */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo & Tên thương hiệu */}
            <Link to="/" className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-blue-800 tracking-tighter leading-none">
                CARTON VŨ TRẦN
              </span>
              <span className="text-[10px] text-orange-500 font-bold tracking-[0.2em] uppercase">
                Packaging Solutions
              </span>
            </Link>

            {/* MENU NGANG (Chỉ hiện trên máy tính - Desktop) */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-bold text-gray-700 hover:text-blue-700 transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Nút Tìm kiếm */}
              <button className="text-gray-400 hover:text-blue-700 ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* NÚT HAMBURGER (Chỉ hiện trên điện thoại - Mobile) */}
            <button 
              onClick={() => setIsOpen(true)} 
              className="lg:hidden text-blue-800 p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. SIDEBAR MOBILE (Hiện ra khi bấm nút Hamburger) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setIsOpen(false)}
      ></div>
      
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-black text-blue-900 text-lg uppercase tracking-tighter">Danh mục</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 text-2xl font-light">✕</button>
          </div>

          <div className="flex flex-col space-y-1">
            <Link onClick={() => setIsOpen(false)} to="/" className="py-3 font-bold text-gray-800 border-b border-gray-50 hover:text-blue-600">
              TRANG CHỦ
            </Link>

            {/* Mục có Menu con (Tất cả sản phẩm) */}
            <div>
              <div 
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} 
                className="py-3 font-bold text-gray-800 flex justify-between items-center cursor-pointer border-b border-gray-50"
              >
                <span>SẢN PHẨM</span>
                <svg className={`w-4 h-4 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${isSubMenuOpen ? 'max-h-60 mt-2' : 'max-h-0'}`}>
                <div className="flex flex-col p-2 pl-4 text-sm space-y-3">
                  <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Hộp Carton" className="text-gray-600 hover:text-blue-600">- Hộp Carton</Link>
                  <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Thùng Carton" className="text-gray-600 hover:text-blue-600">- Thùng Carton</Link>
                  <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Băng Keo" className="text-gray-600 hover:text-blue-600">- Băng Keo</Link>
                  <Link onClick={() => setIsOpen(false)} to="/san-pham?cat=Văn Phòng Phẩm" className="text-gray-600 hover:text-blue-600">- Văn Phòng Phẩm</Link>
                </div>
              </div>
            </div>

            <Link onClick={() => setIsOpen(false)} to="/gioi-thieu" className="py-3 font-bold text-gray-800 border-b border-gray-50 hover:text-blue-600">
              GIỚI THIỆU
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/tin-tuc" className="py-3 font-bold text-gray-800 border-b border-gray-50 hover:text-blue-600">
              TIN TỨC
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/lien-he" className="py-3 font-bold text-gray-800 border-b border-gray-50 hover:text-blue-600">
              LIÊN HỆ
            </Link>
          </div>

          {/* Liên hệ nhanh trong Sidebar */}
          <div className="mt-12 p-4 bg-orange-50 rounded-2xl border border-orange-100">
            <p className="text-[10px] text-orange-600 font-black uppercase mb-1">Tổng đài hỗ trợ</p>
            <p className="text-blue-900 font-black text-lg">0947.088.423</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;