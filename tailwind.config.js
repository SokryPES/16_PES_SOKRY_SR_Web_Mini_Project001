/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        'xl': '1300px',
        '2xl': '1200px',
      },
      colors: {
        primary: "#785dd7",
        secondary: "#17254e",
      },
      fontSize:{
        default: "18px",
      },
      keyframes: {
        ltr: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        ltr: 'ltr 15s ease infinite',
      },
      boxShadow:{
        'category' : '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
      'banner': "url('../images/homepage/banner-bg.png')",
      'course-a': "url('../images/homepage/course-bg-1.jpg')",
      'card-bg' : "url('../images/homepage/bg-card.png')",
      'enroll-bg': "url('../images/homepage/enroll-bg.png')",
      'testimonial-bg': "url('../images/homepage/testimonial.png')",
      'carrer-bg': "url('../images/homepage/carrer-card-bg.png')",
      'footer-bg': "url('../images/topheader/footer-bg.png')",
      'about-bg': "url('../images/about-us/banner.png')",
    }
    },
  },
  plugins: [],
};
