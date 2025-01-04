import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import "react-widgets/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropListingPage from './pages/PropListingPage/PropListingPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import NoPage from './pages/NoPage/NoPage';
import HomePage from './pages/HomePage/HomePage';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropListingPage />} />
          <Route path="/properties/:id" element={<PropertyPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
