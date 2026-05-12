import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail'; 
import About from './pages/About';
import Blog from './pages/Blog';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar sẽ luôn hiển thị ở mọi trang */}
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:id" element={<ProductDetail />} /> 
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/tin-tuc" element={<Blog />} />
        </Routes>

        {/* Nút Zalo cố định ở góc màn hình */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://zalo.me/0985374854" 
            target="_blank" 
            rel="noreferrer"
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center font-bold"
          >
            Chat Zalo
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;