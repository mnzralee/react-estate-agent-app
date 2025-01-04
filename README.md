# React Estate Agent

## Project Overview
This project represents a comprehensive and responsive Single Page Application (SPA) developed using React.js and Vite. The application facilitates the searching and management of real estate properties, allowing users to apply various search criteria, view detailed property information, and curate a personalized list of favorites. The project was designed and implemented to meet the rigorous requirements of the **Advanced Client-Side Web Development (5COSC026W)** module at the **University of Westminster**, emphasizing academic excellence and industry relevance.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

### Property Search
- Enables users to filter properties based on:
  - **Property Type**: House, Flat, or Any
  - **Price Range**: Minimum and maximum values
  - **Number of Bedrooms**: Minimum and maximum values
  - **Date Added**: Search within specified dates or a date range
  - **Postcode Area**: First segment of the postcode (e.g., NW1, BR1)
- Employs JSON-based property data with a dataset of seven distinct properties.

### Search Results Presentation
- Dynamically displays results matching user criteria, with each entry featuring:
  - A thumbnail image
  - A concise description
  - Price information
- Includes responsive design optimized for diverse screen dimensions.

### Detailed Property View
- Provides a dedicated page for each property, containing:
  - A primary image and an interactive gallery showcasing 6–8 images per property
  - Information organized in React Tabs, including:
    - Detailed property descriptions
    - Floor plans
    - Google Map integration

### Favorites Management
- Features an intuitive interface for managing favorite properties:
  - Add properties using drag-and-drop functionality or a "favorite" button/icon.
  - Remove properties via drag-and-drop or a delete button.
  - Clear the entire favorites list with a single action.
- Favorites persist using local browser storage, ensuring data continuity.

### Responsiveness and Accessibility
- Implements hand-written media queries alongside CSS Grid and Flexbox to ensure:
  - Adaptive layouts for desktop and mobile devices.
  - Seamless user experience across varying screen sizes, including tablets.
- Adheres to accessibility best practices with a focus on inclusive design.

### Aesthetic and Usability Principles
- Ensures clear visual hierarchy and alignment:
  - Effective grouping of related elements.
  - Consistent use of fonts, colors, and design elements across the application.
  - Balanced use of visual elements to guide user focus.

### Security Measures
- Mitigates client-side security risks through:
  - Implementation of Content Security Policy (CSP).
  - HTML encoding to prevent injection vulnerabilities.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/react-estate-agent.git
    cd react-estate-agent
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your Google Maps API key:
    ```env
    VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

5. Access the application in your browser at `http://localhost:3000`.

## Project Structure

```
estate-agent-spa/
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   └── prop-gallery/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   └── properties.json
│   ├── components/
│   │   ├── ContactAgent/
│   │   │   └── ContactAgent.jsx
│   │   ├── FloatBtn/
│   │   │   ├── FloatBtn.css
│   │   │   └── FloatBtn.jsx
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.jsx
│   │   ├── Map/
│   │   │   └── Map.jsx
│   │   ├── PropertiesList/
│   │   ├── PropertyCard/
│   │   ├── SearchBar/
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.css
│   │   │   └── HomePage.jsx
│   │   ├── NoPage/
│   │   │   ├── NoPage.css
│   │   │   └── NoPage.jsx
│   │   ├── PropertyPage/
│   │   │   ├── PropertyPage.css
│   │   │   └── PropertyPage.jsx
│   │   ├── PropListingPage/
│   │   │   ├── PropListingPage.css
│   │   │   └── PropListingPage.jsx
├── styles.css
├── vite.config.js
```

## Dependencies

- `react`: ^19.0.0
- `vite`: ^6.28.1
- `react-dom`: ^19.0.0
- `react-bootstrap`: ^2.10.7
- `bootstrap`: ^5.3.3
- `react-router-dom`: ^5.4.0
- `@react-google-maps/api`: ^2.20.5
- `eslint`: ^5.8.4
- `@vercel/analytics`: ^1.4.1

## Scripts

- `dev`: Start the development server
- `build`: Build the project for production
- `lint`: Run ESLint
- `preview`: Preview the production build

## Analytical Reflection

### Key Challenges and Solutions
1. **Search Functionality**:
   - Dynamic filtering across multiple criteria was achieved using efficient state management in React.
2. **Favorites Management**:
   - Ensured properties could not be duplicated in the favorites list through rigorous state checks.
   - Leveraged local storage for data persistence.
3. **Responsive Design**:
   - Utilized custom media queries and modern CSS techniques to ensure an optimized experience across devices.

### Design Justification
- **Usability**: Emphasis on intuitive navigation and user-friendly interactions.
- **Aesthetic Consistency**: A unified design approach aligned with industry best practices.
- **Security and Reliability**: Incorporation of client-side safeguards and robust coding standards.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for further details.

## Acknowledgments
- Module Leader: **Ebad Majeed**
- Institution: **University of Westminster, School of Electronics and Computer Science**
