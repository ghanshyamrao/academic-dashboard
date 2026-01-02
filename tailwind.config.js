export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // Blue (main brand)
        success: "#16a34a",   // Green (safe)
        warning: "#f59e0b",   // Orange (alert)
        danger: "#dc2626",    // Red (critical)
        background: "#f9fafb",
        surface: "#ffffff",
        muted: "#6b7280"
      },
      borderRadius: {
        card: "14px"
      },
      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
}
