# ShopHub - E-commerce React Website

A modern, responsive e-commerce web application built with React 19 and Vite. ShopHub features a product catalog, user authentication, shopping cart management, and a checkout page — all powered by React Context API for state management.

## Features

- **Product Catalog** — Browse a grid of products with images, prices, and quick-add-to-cart functionality
- **Product Details** — View detailed information about each product
- **Authentication** — Sign up and log in with form validation (password strength rules enforced via React Hook Form)
- **Shopping Cart** — Add/remove items, adjust quantities, and view real-time price totals
- **Responsive Design** — Mobile-friendly layout using CSS Grid and Flexbox
- **Session Persistence** — User sessions and cart data persist via LocalStorage

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router DOM 7 | Client-side routing |
| React Hook Form | Form validation |
| Vite | Build tool & dev server |
| CSS | Styling (no external UI library) |
| LocalStorage | Client-side data persistence |

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/viniciusdias2902/ecommerce-react-website.git

# Navigate to the project directory
cd ecommerce-react-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx            # Navigation bar with auth state
│   ├── ProductCard.jsx       # Product card for the catalog grid
│   └── ProductDetails.jsx    # Product detail page
├── pages/
│   ├── Home.jsx              # Homepage with product grid
│   ├── Auth.jsx              # Login / Sign up page
│   └── Checkout.jsx          # Shopping cart page
├── context/
│   ├── AuthContext.jsx       # Authentication state management
│   └── CartContext.jsx       # Cart state management
├── data/
│   └── products.js           # Static product data
├── App.jsx                   # Root component with routing
├── App.css                   # Global styles
└── main.jsx                  # Application entry point
```

## Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Product catalog grid |
| `/auth` | Auth | Login and sign up forms |
| `/checkout` | Checkout | Shopping cart with totals |
| `/products/:id` | Product Details | Individual product view |

## Screenshots

> _Add screenshots here to showcase the application._

## License

This project is open source and available under the [MIT License](LICENSE).
