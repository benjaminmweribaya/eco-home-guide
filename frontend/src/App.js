import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Tips from './pages/Tips';
import Favorites from './pages/Favorites';
import { AppProvider } from "./AppContext";
import Login from './Auth/Login';
import Signup from './Auth/Signup';

function App() {
  const { user } = useContext(AppContext);

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/tips"
              element={user ? <Tips /> : <Navigate to="/login" />}
            />
            <Route
              path="/favorites"
              element={user ? <Favorites /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;