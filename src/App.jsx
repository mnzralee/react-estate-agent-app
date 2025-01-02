import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import "react-widgets/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropListingPage from './pages/PropListingPage/PropListingPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import Footer from './components/Footer/Footer';
import NoPage from './pages/NoPage/NoPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/properties" element={<PropListingPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
