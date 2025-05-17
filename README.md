# Coffee Store Client

A React + Vite client application for managing a coffee store inventory. This app allows users to view, add, update, and delete coffee items, with a modern UI built using Tailwind CSS and DaisyUI.

## Features

- View a list of coffees with details
- Add new coffee entries
- Edit existing coffee information
- Delete coffees with confirmation dialogs
- Responsive design using Tailwind CSS and DaisyUI
- SweetAlert2 for user-friendly notifications

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [React Router](https://reactrouter.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/coffee-store-client.git
   cd coffee-store-client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend

This client expects a backend API running at `https://v1-coffee-store-server-psi.vercel.app/coffees`. Make sure to start your backend server before using the app.

## Project Structure

- `src/components/` – React components (Add, Update, View, List Coffees)
- `src/Root/Root.jsx` – Main layout with header and outlet
- `src/main.jsx` – Entry point and router setup

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## License

MIT

---

_Built with ❤️ using React and Vite._
