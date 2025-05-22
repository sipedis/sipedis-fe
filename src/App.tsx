import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import ChatBoxPage from './pages/ChatBoxPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import MainLayout from './layout/mainLayout';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Halaman public tanpa navbar */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Halaman public dengan navbar */}
      <Route
        path="/"
        element={
          <LandingPage />
        }
      />

      <Route
        path="/about"
        element={
          <AboutPage />
        }
      />

      {/* Halaman private (butuh login) */}
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ChatBoxPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat/:roomId"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ChatBoxPage />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
