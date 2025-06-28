/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        // Gradient backgrounds
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-quaternary': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-quinary': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-senary': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-blue': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-green': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'gradient-pink': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-forest': 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        'gradient-fire': 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        // Darker gradient backgrounds
        'gradient-dark-purple': 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
        'gradient-dark-blue': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'gradient-dark-green': 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
        'gradient-dark-red': 'linear-gradient(135deg, #8e0e00 0%, #1f1c18 100%)',
        'gradient-dark-orange': 'linear-gradient(135deg, #cb2d3e 0%, #ef473a 100%)',
        'gradient-dark-pink': 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
        'gradient-dark-aurora': 'linear-gradient(135deg, #2d1b69 0%, #11998e 25%, #8e2de2 50%, #4a00e0 75%, #1e3c72 100%)',
        'gradient-dark-sunset': 'linear-gradient(135deg, #8e0e00 0%, #cb2d3e 50%, #1e3c72 100%)',
        'gradient-dark-ocean': 'linear-gradient(135deg, #1e3c72 0%, #2d1b69 50%, #8e2de2 100%)',
        'gradient-dark-forest': 'linear-gradient(135deg, #134e5e 0%, #2d5016 100%)',
        'gradient-dark-fire': 'linear-gradient(135deg, #8e0e00 0%, #cb2d3e 100%)',
        'gradient-dark-midnight': 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-dark-space': 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
        'gradient-dark-elegant': 'linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #34495e 75%, #2c3e50 100%)',
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, "sans-serif"],
        sora: [`var(--font-sora)`, "sans-serif"],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
