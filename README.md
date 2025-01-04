# Estate Agent Client-side Web Application

## Project Overview
This project represents a comprehensive and responsive Single Page Application (SPA) developed using React.js. The application facilitates the searching and management of real estate properties, allowing users to apply various search criteria, view detailed property information, and curate a personalized list of favorites. The project was designed and implemented to meet the rigorous requirements of the **Advanced Client-Side Web Development (5COSC026W)** module at the **University of Westminster**, emphasizing academic excellence and industry relevance.

## Features and Functionalities

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

## Technological Framework
- **React.js**: Core framework for building modular and reusable UI components.
- **CSS (Flexbox and Grid)**: Styling and layout for responsiveness and design consistency.
- **Local Storage**: Persistent client-side data management.
- **JSON**: Backend-agnostic data format for property storage.
- **React Tabs**: Structured organization of detailed property information.

## Implementation and Usage

### Prerequisites
- Node.js and npm installed.

### Installation Process
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/estate-agent-spa.git
   cd estate-agent-spa
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Access the application in your browser at `http://localhost:3000`.

### Project Architecture
```
estate-agent-spa/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchForm.jsx
│   │   ├── PropertyList.jsx
│   │   ├── PropertyDetail.jsx
│   │   ├── FavoritesList.jsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── responsive.css
│   ├── data/
│   │   ├── properties.json
│   ├── App.jsx
│   ├── index.js
├── package.json
```

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

## Potential Future Work
- Incorporate animations for drag-and-drop interactions to enhance user engagement.
- Expand security measures by implementing runtime data validation.
- Improve accessibility by integrating ARIA attributes and enhanced keyboard navigation.

## Acknowledgments
- Module Leader: **Ebad Majeed**
- Institution: **University of Westminster, School of Electronics and Computer Science**

## License
This project is licensed under the MIT License. Refer to the [LICENSE](LICENSE) file for further details.
