// ./tailwindcss -i input.css -o styles.css --watch

// tailwind.config.js
module.exports = {
  content: [
    "./*.html", // <-- Add this if your HTML is in the root
    // or
    // "./**/*.{html,js}", // <-- Add this for all subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};