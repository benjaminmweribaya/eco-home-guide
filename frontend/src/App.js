import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AppContext } from './AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

import Home from './pages/Home';
import Tips from './pages/Tips';
import Favorites from './pages/Favorites';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

function App() {
  const { user } = useContext(AppContext);

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  // Redirect to homepage if already logged in
  const PublicOnlyRoute = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <AuthModal />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6 max-w-7xl w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />

            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicOnlyRoute>
                  <Login />
                </PublicOnlyRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicOnlyRoute>
                  <Signup />
                </PublicOnlyRoute>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
