# My Awesome Donation Website

Welcome to My Awesome Donation Website! This web application is designed to facilitate donations and provide statistics on donations made. It follows a specific design provided in a Figma file.

## Features

### 1. Navigation Bar

- A persistent navigation bar is displayed on all pages.
- Includes a website logo on the left and menu items on the right: Home, Donation, and Statistics.
- The active route is highlighted to indicate the currently selected page.

### 2. Home Page

- Features a banner section with a title, search bar, and a background image with an overlay.
- The background image covers only the banner section.
- Displays at least 12 cards, arranged in rows of four.
- Each card has unique design elements, including background colors for the card and category, as well as text color for the title and category.
- Clicking on a card redirects the user to the Donation Details page.

### 3. Donation Details Page

- A dynamic route accessible by clicking on a card from the home page.
- Displays detailed information about a donation, including a picture, title, description, and a Donate button with a specific price.
- The Donate button's background color matches the text color of the card on the homepage.
- Clicking the Donate button triggers a toast or sweet alert with a meaningful success message.

### 4. Donation Page

- Displays a list of all donations made.
- Each row contains two cards, each featuring a picture, category, title, price, and a View Details button.
- The View Details button is functional, allowing users to view more information about each donation.
- If there are more than four donations, a "See All" button appears, allowing users to view the remaining data while hiding the button when clicked.

## Usage

To run this website locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-awesome-donation-website.git
