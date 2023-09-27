<header>
        <h1>Welcome to My Awesome Donation Website</h1>
        <p>This web application is designed to facilitate donations and provide statistics on donations made. It follows a specific design provided in a Figma file.</p>
    </header>

    <section>
        <h2>Features</h2>

        <h3>1. Navigation Bar</h3>
        <ul>
            <li>A persistent navigation bar is displayed on all pages.</li>
            <li>Includes a website logo on the left and menu items on the right: Home, Donation, and Statistics.</li>
            <li>The active route is highlighted to indicate the currently selected page.</li>
        </ul>

        <h3>2. Home Page</h3>
        <ul>
            <li>Features a banner section with a title, search bar, and a background image with an overlay.</li>
            <li>The background image covers only the banner section.</li>
            <li>Displays at least 12 cards, arranged in rows of four.</li>
            <li>Each card has unique design elements, including background colors for the card and category, as well as text color for the title and category.</li>
            <li>Clicking on a card redirects the user to the Donation Details page.</li>
        </ul>

        <h3>3. Donation Details Page</h3>
        <ul>
            <li>A dynamic route accessible by clicking on a card from the home page.</li>
            <li>Displays detailed information about a donation, including a picture, title, description, and a Donate button with a specific price.</li>
            <li>The Donate button's background color matches the text color of the card on the homepage.</li>
            <li>Clicking the Donate button triggers a toast or sweet alert with a meaningful success message.</li>
        </ul>

        <h3>4. Donation Page</h3>
        <ul>
            <li>Displays a list of all donations made.</li>
            <li>Each row contains two cards, each featuring a picture, category, title, price, and a View Details button.</li>
            <li>The View Details button is functional, allowing users to view more information about each donation.</li>
            <li>If there are more than four donations, a "See All" button appears, allowing users to view the remaining data while hiding the button when clicked.</li>
        </ul>
    </section>

    <section>
        <h2>Usage</h2>
        <ol>
            <li>Clone the repository:</li>
        </ol>
        <code>git clone https://github.com/yourusername/my-awesome-donation-website.git</code>

        <ol start="2">
            <li>Install dependencies:</li>
        </ol>
        <code>cd my-awesome-donation-website</code>
        <code>npm install</code>

        <ol start="3">
            <li>Start the development server:</li>
        </ol>
        <code>npm start</code>

        <p>The website will be accessible at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
    </section>

    <section>
        <h2>JSON Data</h2>
        <p>Ensure that you have a JSON file with at least 12 data items. Each data item should include the following properties:</p>
        <ul>
            <li>Picture</li>
            <li>Title</li>
            <li>Category</li>
            <li>Color for category_bg</li>
            <li>Color for card_bg</li>
            <li>Color for text and button background</li>
            <li>Description</li>
            <li>Price</li>
        </ul>
    </section>

    <section>
        <h2>Design</h2>
        <p>The website design is based on a Figma design file. Please refer to the Figma file for detailed design specifications.</p>
    </section>

    <section>
        <h2>Credits</h2>
        <p>This website was developed by [Your Name].</p>
        <p>Design inspiration from the provided Figma design.</p>
    </section>

    <section>
        <h2>License</h2>
        <p>This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.</p>
    </section>