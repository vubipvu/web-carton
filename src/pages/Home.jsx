import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
      {/* Google Font import — thêm vào index.html nếu chưa có */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> */}

      {/* ── HERO ── */}
      <div style={{ background: '#1565C0', padding: '2.8rem 1.8rem 2.4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          maxWidth: 900,
        }}>
          {/* Cột trái: text */}
          <div>
            <span style={{
              display: 'inline-block', background: '#FFF9C4', color: '#E65100',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '4px 12px', borderRadius: 20, marginBottom: '1rem'
            }}>
              ✦ Xưởng sản xuất trực tiếp
            </span>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 .8rem' }}>
              Xưởng Thùng Carton<br />
              <span style={{ color: '#FFF176' }}>Vũ Trần</span>
            </h1>

            <p style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, marginBottom: '1.6rem' }}>
              Thùng 3 lớp, 5 lớp, hộp COD — sản xuất theo đúng kích thước yêu cầu.
              Giá gốc xưởng, giao hàng nhanh, không qua trung gian.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/san-pham" style={{
                background: '#FF6F00', color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                padding: '11px 22px', border: 'none', borderRadius: 8, textDecoration: 'none', display: 'inline-block'
              }}>
                Xem mẫu sản phẩm →
              </Link>
              <Link to="/lien-he" style={{
                background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                padding: '10px 20px', border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: 8, textDecoration: 'none', display: 'inline-block'
              }}>
              
                Báo giá ngay
              </Link>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: '1.5rem', paddingTop: '1.3rem', borderTop: '1px solid rgba(255,255,255,0.18)' }}>
              {['Thùng 3 lớp', 'Thùng 5 lớp', 'Hộp COD', 'Băng keo', 'Giấy A4'].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)',
                  background: 'rgba(255,255,255,0.12)', padding: '4px 11px', borderRadius: 20
                }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Cột phải: ảnh
              👉 Thay src bên dưới bằng ảnh thực tế của xưởng hoặc sản phẩm.
                 Ví dụ: src="/images/xuong-carton.jpg"
                 Hoặc import ảnh: import heroImg from '../assets/xuong.jpg'
          */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 14, overflow: 'hidden',
              aspectRatio: '4/3',
              border: '2px solid rgba(255,255,255,0.15)',
              background: '#0D47A1',
            }}>
              <img
                src="/images/image.png"
                alt="Xưởng sản xuất thùng carton Vũ Trần"
                style={{ width: '100%', height: '140%', objectFit: 'cover', display: 'block' }}
                onError={e => {
                  // Hiện placeholder nếu ảnh chưa có
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Placeholder — sẽ ẩn khi có ảnh thật */}
              <div style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 8, height: '100%',
                color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '1rem'
              }}>
                <span style={{ fontSize: 40 }}>🏭</span>
                <span style={{ fontSize: 12 }}>Thêm ảnh xưởng / sản phẩm vào đây<br /><code style={{ opacity: 0.6 }}>/images/xuong-carton.jpg</code></span>
              </div>
            </div>
            {/* Badge góc dưới trái */}
            <div style={{
              position: 'absolute', bottom: 12, left: 12,
              background: '#FF6F00', color: '#fff',
              fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 8,
            }}>
              📦 Sản xuất tại xưởng
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', background: '#E3F2FD' }}>
        {[
          { num: '100%', label: 'Giá gốc xưởng' },
          { num: '24h',  label: 'Giao hàng nhanh' },
          { num: '∞',    label: 'Kích thước tuỳ chỉnh' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '1.2rem 1rem', textAlign: 'center',
            borderRight: i < 2 ? '1px solid #BBDEFB' : 'none'
          }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1565C0', lineHeight: 1, display: 'block' }}>{s.num}</span>
            <span style={{ fontSize: 11, color: '#1976D2', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 3, display: 'block' }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── TẠI SAO CHỌN CHÚNG TÔI ── */}
      <div style={{ padding: '2.2rem 1.8rem', background: '#fff' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F00', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
          Lợi thế của chúng tôi
        </p>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#1A237E', margin: '0 0 1.5rem' }}>
          Tại sao chọn Vũ Trần?
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 12 }}>
          {[
            { icon: '🏭', title: 'Giá gốc tại xưởng',       desc: 'Sản xuất trực tiếp, không qua trung gian — tiết kiệm tối đa chi phí cho doanh nghiệp.' },
            { icon: '📏', title: 'Kích thước theo yêu cầu', desc: 'Đặt hàng đúng thông số — từ hộp nhỏ COD đến thùng lớn số lượng lớn.' },
            { icon: '⚡', title: 'Giao hàng nhanh',          desc: 'Quy trình sản xuất hiện đại, đáp ứng tiến độ gấp cho khách hàng.' },
          ].map((c, i) => (
            <div key={i} style={{ background: '#F8FBFF', border: '1.5px solid #BBDEFB', borderRadius: 12, padding: '1.2rem 1rem' }}>
              <div style={{
                width: 40, height: 40, background: '#E3F2FD', borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, marginBottom: '0.9rem'
              }}>{c.icon}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A237E', margin: '0 0 6px' }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: '#546E7A', lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── SẢN PHẨM ── */}
      <div style={{ padding: '2.2rem 1.8rem', background: '#FFF8F1' }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#FF6F00', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
          Danh mục sản phẩm
        </p>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#BF360C', margin: '0 0 1.2rem' }}>
          Giải pháp đóng gói toàn diện
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          {[
            { icon: '📦', label: 'Thùng 3 lớp', to: '/san-pham' },
            { icon: '🗂️', label: 'Thùng 5 lớp', to: '/san-pham' },
            { icon: '📫', label: 'Hộp COD',     to: '/san-pham' },
            { icon: '🔧', label: 'Băng keo',    to: '/san-pham' },
            { icon: '📄', label: 'Giấy A4',     to: '/san-pham' },
            { icon: '➕', label: 'Xem thêm',    to: '/san-pham' },
          ].map((p, i) => (
            <Link key={i} to={p.to} style={{
              background: '#fff', border: '1.5px solid #FFE0B2', borderRadius: 10,
              padding: '1rem 0.8rem', textAlign: 'center', textDecoration: 'none', display: 'block'
            }}>
              <span style={{ fontSize: 22, display: 'block', marginBottom: 6 }}>{p.icon}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#BF360C', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{p.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── CTA / HOTLINE ── */}
      <div style={{ background: '#1565C0', padding: '2rem 1.8rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 1rem', fontWeight: 500 }}>
          Cần tư vấn hoặc báo giá nhanh? Liên hệ ngay hôm nay:
        </p>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 14,
          background: '#fff', padding: '14px 28px', borderRadius: 12, marginBottom: '0.8rem'
        }}>
          <span style={{ fontSize: 24 }}>📞</span>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FF6F00', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', lineHeight: 1, marginBottom: 3 }}>
              Hotline / Zalo
            </span>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#1A237E', display: 'block', lineHeight: 1 }}>
              0947.088.423
            </span>
          </div>
        </div>

        <br />
        <a href="https://zalo.me/0947088423" style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: 'rgba(255,255,255,0.18)', color: '#fff',
          fontSize: 13, fontWeight: 600, padding: '7px 18px', borderRadius: 20, textDecoration: 'none'
        }}>
          💬 Nhắn Zalo để báo giá nhanh
        </a>
      </div>
    </div>
  );
};

export default Home;