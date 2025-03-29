import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import Features from "./components/features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

// Create a Home component that includes all the sections
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Blog />
      <FAQ />
    </>
  );
}

// Protected Route wrapper
function ProtectedRoute({ children }) {
  // Add your authentication logic here
  const isAuthenticated = false; // Replace with your auth check

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Layout component to handle conditional footer rendering
function Layout() {
  const location = useLocation();
  const hideFooterPaths = ["/login"];
  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />

          {/* Protected Routes */}
          <Route
            path="/demo"
            element={
              <ProtectedRoute>
                <div className="flex items-center justify-center min-h-screen bg-black">
                  <h1 className="text-4xl text-white font-hv-medium">
                    Demo Page (Protected)
                  </h1>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Add more routes as needed */}
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />
          <Route path="/terms" element={<div>Terms of Service</div>} />
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
