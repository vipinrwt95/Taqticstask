# Shopping Cart App

A simple shopping cart app built with React, showcasing a product catalog, cart functionality, and basic features like promo code application and order placement. The app allows users to view products, add them to the cart, apply promo codes, and place orders.

## Features

- **Product Catalog**: Displays a list of products with details such as title, image, and price.
- **Cart Functionality**: Users can add, remove, and update the quantity of products in their cart.
- **Promo Code**: Users can apply promo codes for discounts.(non functional)
- **Order Placement**: Users can place an order, with a simple loading spinner during processing.

## Tech Stack

- **React**: For building the user interface.
- **useState, useEffect**: For state management and side effects.
- **CSS**: For styling the app and creating responsive layouts.
- **Testing Library**: For testing the components.

## Design Decisions

- **Functional Components**: The app is built using functional components and hooks (`useState`) for managing component state.
- **Component-based structure**: The app is divided into small reusable components like `ProductCard`, `Cart`, and `PromoCode`.
- **CSS**: Enhanced Color Scheme and Design System
This repository includes a modern and responsive design system that uses a custom CSS setup with an enhanced color scheme and user interface components. The design system includes a light and dark mode, which can be toggled dynamically. It also provides a range of UI elements, from a styled navbar to product cards and filter components.

Key Features
Color Scheme:

The design system is built with a flexible color palette that adapts to both light and dark modes. The :root selector contains a set of custom CSS variables for easy customization and theming.

Default colors are designed for a clean and minimalistic layout with sufficient contrast for accessibility.

Dark mode adjustments provide an elegant transition with altered background and text colors to reduce eye strain in low-light environments.

Navbar:

The navbar is sticky and fixed at the top, ensuring that it stays visible as the user scrolls.

It includes a gradient text effect for the title and buttons with interactive hover and active states.

The navbar can be hidden or shown dynamically using the .navbar.hidden class.

Includes icons for cart and other controls, with a notification badge to show dynamic values (e.g., cart items).

Product Cards:

Product cards are designed with a clean layout that showcases product images, titles, prices, and a call-to-action button.

The cards feature hover effects that add interactivity and depth with shadow transitions.

The buttons in the product cards have a gradient background, smooth transitions, and a hover effect for an enhanced user experience.

Filter Component:

The filter UI is styled with a blurred backdrop, which allows users to interact with the filter options while keeping the focus on the background content.

Select dropdowns are enhanced with a custom icon and hover/focus states, improving accessibility and interactivity.

Supports customization, such as setting the border color and shadow effect when focused or hovered.

Usage
To apply this design system to your project, follow these steps:

Include the CSS file: Make sure to link the provided CSS file into your HTML or import it into your JavaScript project (e.g., via import './path/to/your/styles.css' in React).

Set Up the Dark Mode Toggle: The dark mode can be activated by adding the .dark-mode class to the body or root element of your app. For example:

js
Copy
Edit
document.body.classList.add('dark-mode');
This will automatically apply the dark theme across the entire UI, altering background colors, text colors, and other components.

Customize the Color Scheme: You can easily adjust the color scheme by modifying the variables in the :root selector. For instance, change the primary color:

css
Copy
Edit
:root {
  --primary-color: #3498db;  /* New primary color */
}
Navbar: The navbar is designed to be fixed at the top of the page. To use it, simply add the class .navbar to your header element and use the .navbar__title and .navbar__controls for the title and buttons, respectively. The navbar will hide when the .navbar.hidden class is added dynamically.

Example:

html
Copy
Edit
<header class="navbar">
  <div class="navbar__title">Your App</div>
  <div class="navbar__controls">
    <button class="navbar__button">Button</button>
    <div class="navbar__cart">
      <i class="navbar__cart-icon">🛒</i>
      <span class="navbar__badge">5</span>
    </div>
  </div>
</header>
Product Cards: For displaying product information, the .product-card component can be used. It includes an image, title, price, and a button to purchase or view more details. You can modify the content and apply custom styling as needed.

Example:

html
Copy
Edit
<div class="product-card">
  <div class="product-card__image-container">
    <img class="product-card__image" src="path/to/image.jpg" alt="Product">
  </div>
  <div class="product-card__content">
    <h3 class="product-card__title">Product Title</h3>
    <div class="product-card__price">$99.99</div>
    <button class="product-card__button">Buy Now</button>
  </div>
</div>
Filter Component: To apply the filter UI, use the .filter class on the container element and .filter__select for the dropdown select inputs. Each filter option should be wrapped in a .filter__label.

Example:

html
Copy
Edit
<div class="filter">
  <label class="filter__label" for="category">Category</label>
  <select class="filter__select" id="category">
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
    <option value="home">Home</option>
  </select>
</div>
Dark Mode Customization
The dark mode adjustments are controlled via the .dark-mode class. If you're building an app with a toggle for light and dark themes, you can add or remove this class based on user preference. This allows for an easy and seamless transition between light and dark modes.

In the dark mode, background colors darken, and text color changes to ensure readability in low-light environments.

The navbar, buttons, and filter components all adapt to the dark mode for a cohesive user experience.

CSS Variables for Customization
The following CSS variables are used throughout the design system for easy customization:

--bg-color: Background color of the page.

--text-color: Color of the text.

--primary-color: Main theme color (used for buttons, links, etc.).

--primary-hover: Hover state for the primary color.

--secondary-color: A secondary theme color for accents.

--border-color: Color for borders.

--card-bg: Background color for cards.

--error-color: Color used for error messages.

--success-color: Color used for success messages.

--shadow-sm, --shadow-md, --shadow-lg, --shadow-xl: Shadow sizes for elements.

--rounded-sm, --rounded-md, --rounded-lg, --rounded-xl: Border radius sizes for rounded corners.

--transition: Transition effect for smooth animations.
- **Simple UI**: A minimal and clean design that focuses on ease of use and responsiveness.

## Running the App Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/shopping-cart-app.git
   cd shopping-cart-app
   npm install  -- to install all dependencies,
   npm run dev to run on local server
   npm test to run test cases .
