/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",], theme: {
        extend: {
            screens: {
                "mobile-small-screen": "320px",
                "mobile-medium-screen": "375px",
                "mobile-large-screen": "425px",
                "tablet-screen": "768px",
                "laptop-screen": "1024px",
                "laptop-large-screen": "1440px",
                "4k-screen": "1680px",
            },
        }, plugins: [],
    }
}