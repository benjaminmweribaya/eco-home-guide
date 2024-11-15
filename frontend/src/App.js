import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Favorites from './pages/Favorites';
import { AppContext } from "./AppContext";
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import AuthModal from "./components/AuthModal";

function App() {
  const { user } = useContext(AppContext);
  console.log('Current user:', user);
  
  const { openAuthModal } = useContext(AppContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      openAuthModal();
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center w-full">
        <header className="shadow-md bg-white mt-6 rounded-lg mx-auto w-full max-w-screen-md">
          <NavBar />
        </header>

        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route
              path="/favorites"
              element={user ? <Favorites /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;