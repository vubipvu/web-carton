import React from 'react';
import { blogData } from '../data/blogData';

const Blog = () => {
  const featuredPost = blogData.find(post => post.featured);
  const otherPosts = blogData.filter(post => !post.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header trang */}
      <div className="bg-white border-b py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-black text-blue-900 uppercase tracking-tighter mb-2">
            Tin Tức & Sự Kiện
          </h1>
          <p className="text-gray-500 font-medium">Cập nhật những xu hướng và kiến thức mới nhất về ngành bao bì.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* BÀI VIẾT NỔI BẬT (TO NHẤT) */}
        {featuredPost && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 mb-16 flex flex-col lg:flex-row cursor-pointer">
            <div className="lg:w-2/3 overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:w-1/3 p-10 flex flex-col justify-center">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-4 inline-block">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight hover:text-blue-700 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {featuredPost.summary}
              </p>
              <div className="flex items-center text-sm text-gray-400 font-medium">
                <span>KhanhBox</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </div>
        )}

        {/* DANH SÁCH BÀI VIẾT KHÁC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherPosts.map((post) => (
            <div key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase text-blue-800">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-400 text-[11px] font-bold mb-3 uppercase">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 mb-4 line-clamp-2 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <button className="text-blue-600 font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
                    Xem chi tiết <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NÚT TẢI THÊM BÀI VIẾT */}
        <div className="text-center mt-20">
          <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-900 hover:text-white transition-all uppercase text-sm tracking-widest">
            Xem thêm bài viết
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;