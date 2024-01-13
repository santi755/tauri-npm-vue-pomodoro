/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                openSans: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
