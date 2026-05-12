/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Thêm phần animation vào đây
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      // Thêm phần keyframes vào đây
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      // Nếu bạn muốn dùng font Be Vietnam Pro đã setup ở các trang trước
      fontFamily: {
        'be-vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}