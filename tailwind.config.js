/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
        slideInFromLeft: 'slideInFromLeft 1s ease-in-out',
        slideInFromRight: 'slideInFromRight 1s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 1s ease-in-out',
        gradient: 'gradient 15s infinite', // Adjust duration as needed
      },
      scale: {
        120: '1.2',
      },
      // Custom sizes for profile picture
      spacing: {
        'profile-pic': '100px', // Adjust as per your preference
      },
    },
  },
  plugins: [],
};
