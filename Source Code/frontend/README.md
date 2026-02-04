# My Portfolio (Vite + React + Tailwind) — Preserved Original Assets & Scripts

## Setup
```bash
npm install
npm run dev
```

## Notes
- This version preserves your original `public/Css` and `public/Js` files and loads them from `index.html`.
- Theme toggle (light/dark) is implemented and persists to localStorage.
- Responsive navbar and components are built with Tailwind. The original scripts may also manipulate DOM for animations — that's intentional to preserve exact UI.
- If some original scripts expect specific markup classnames, tweak components to match or I can integrate those scripts into React lifecycle for tighter control.
