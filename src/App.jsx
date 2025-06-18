import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/LandingPage';
import WebSets from './components/WebSets';
import Write from './components/Write';
import Newsletter from './components/ComingSoon';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import FlashcardSetForm from './components/FlashcardSetForm';
import FlashcardViewer from './components/FlashcardViewer';
import PrivateRoute from './components/PrivateRoute';
import SubscribePage from './components/SubscribePage';
import SubscribeSuccess from './components/SubscribeSuccess';
import { AuthProvider } from './context/AuthContext';
import { SetsProvider } from './context/SetsContext';

const Home = () => (
  <div>
    <Navbar />
    <Landing id="home" />
    <WebSets id="about" />
    <Write />
    <Newsletter id="contact" />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <SetsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRoute>
                  <FlashcardSetForm />
                </PrivateRoute>
              }
            />
            <Route
              path="/study/:setId"
              element={
                <PrivateRoute>
                  <FlashcardViewer />
                </PrivateRoute>
              }
            />
            <Route path="/subscribe" element={<SubscribePage />} />
            <Route path="/subscribe-success" element={<SubscribeSuccess />} />
          </Routes>
        </SetsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
