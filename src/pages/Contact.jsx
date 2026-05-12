import React from 'react';

const Contact = () => {
  const cards = [
    {
      icon: '📞',
      label: 'Hotline',
      value: '0947.088.423',
      note: 'Trần Sỹ Vũ — Gọi trực tiếp',
      full: false,
    },
    {
      icon: '💬',
      label: 'Zalo',
      value: '0947.088.423',
      note: 'Nhắn để báo giá siêu nhanh',
      full: false,
    },
    {
      icon: '📍',
      label: 'Địa chỉ xưởng',
      value: '[Điền địa chỉ xưởng của bạn tại đây]',
      note: 'Khách hàng có thể đến xem hàng trực tiếp tại xưởng',
      full: true,
    },
  ];

  return (
    <div style={{ fontFamily: "'Be Vietnam Pro', sans-serif", background: '#F0F7FF', padding: '2.5rem 1.5rem', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#FF6F00', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
          ✦ Liên hệ với chúng tôi
        </span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#1A237E', margin: '0 0 .5rem' }}>
          Đặt hàng &amp; Báo giá nhanh
        </h1>
        <p style={{ fontSize: '0.93rem', color: '#546E7A', lineHeight: 1.6, margin: 0 }}>
          Nhắn Zalo hoặc gọi trực tiếp để nhận báo giá tốt nhất — thùng số lượng lớn hoặc theo kích thước riêng.
        </p>
      </div>

      {/* Info cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 14,
        maxWidth: 700,
        margin: '0 auto 1.5rem',
      }}>
        {cards.map((c, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              border: '1.5px solid #BBDEFB',
              borderRadius: 14,
              padding: '1.3rem 1.2rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              gridColumn: c.full ? '1 / -1' : undefined,
            }}
          >
            <div style={{
              width: 42, height: 42, minWidth: 42,
              background: '#E3F2FD', borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20,
            }}>
              {c.icon}
            </div>
            <div>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FF6F00', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 3 }}>
                {c.label}
              </span>
              <span style={{ fontSize: c.full ? '0.97rem' : '1.1rem', fontWeight: 800, color: '#1A237E', display: 'block', lineHeight: 1.2 }}>
                {c.value}
              </span>
              <span style={{ fontSize: 12, color: '#78909C', marginTop: 3, display: 'block' }}>
                {c.note}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        maxWidth: 700,
        margin: '0 auto',
        background: '#1565C0',
        borderRadius: 14,
        padding: '1.6rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
      }}>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6, textAlign: 'center', margin: 0 }}>
          Quý khách có nhu cầu đặt thùng carton số lượng lớn hoặc theo kích thước riêng —
          liên hệ ngay để được tư vấn và báo giá tốt nhất.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="https://zalo.me/0947088423"
            style={{
              background: '#00B14F', color: '#fff', fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 700, fontSize: '0.95rem', padding: '12px 26px',
              border: 'none', borderRadius: 9, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            💬 Nhắn Zalo ngay
          </a>
          <a
            href="tel:0947088423"
            style={{
              background: 'rgba(255,255,255,0.15)', color: '#fff', fontFamily: "'Be Vietnam Pro', sans-serif",
              fontWeight: 700, fontSize: '0.95rem', padding: '11px 24px',
              border: '1.5px solid rgba(255,255,255,0.4)', borderRadius: 9, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            📞 Gọi ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;