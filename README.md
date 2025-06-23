1. Overview

This documentation provides a detailed guide to the Author Book Store website, designed for an author to sell books and allow users to book meetings/events. The website includes:

Book browsing for both guests and registered users

Login/Registration system for purchasing and booking

New book launch section

Author information and biography

Responsive design for all devices

2. Technical Stack

Component	Technology Used
Frontend	HTML5, CSS3, Bootstrap 5, JavaScript
Backend	WordPress (PHP)
Plugins	WooCommerce (for e-commerce), Bookly/Amelia (for booking)
Hosting	Any WordPress-compatible hosting (e.g., Bluehost, SiteGround)

3. Website Structure

3.1. Main Sections
Navigation Bar

Sticky header with logo, menu links, and login button.

Collapsible on mobile.

Hero Section

Full-screen background with a call-to-action button.

Displays the author's tagline.

New Release Section

Highlights the latest book with a "New Release" badge.

Includes purchase and "Learn More" buttons.

Books Section

Displays featured books in a responsive grid.

Guest users see "View Details" buttons.

Logged-in users see "Add to Cart" buttons.

Author Booking Section

Allows booking for events (only for logged-in users).

Guests see a login prompt.

About the Author

Author bio with an image and "Read Full Bio" button.

Login/Registration Modal

Toggle between login and registration forms.

4. Key Features

4.1. Guest Browsing vs. Logged-in Purchasing
Guests can browse books but cannot purchase or book events.

Logged-in users can:

Add books to cart.

Book the author for events.

UI changes dynamically based on login status.

4.2. Dynamic Button Behavior

User State	Button Text	Button Style
Guest	"View Details"	btn-outline-primary
Logged-in	"Add to Cart"	btn-primary

4.3. Login/Registration Modal
Toggle between Login and Register tabs.

Form validation (frontend only; backend handled by WordPress).

4.4. Responsive Design
Works on desktops, tablets, and mobiles.

Uses Bootstrap 5 grid system.

5. WordPress Integration

5.1. Required Plugins
WooCommerce – For book sales.

Bookly/Amelia – For booking functionality.

Custom Post Type UI – To create a "Books" post type.

Members – For user role management.

5.2. Theme Setup

Create a child theme (or use a blank theme like Understrap).

Add custom templates for:

Homepage (front-page.php)

Single book page (single-book.php)

Booking page (page-booking.php)

