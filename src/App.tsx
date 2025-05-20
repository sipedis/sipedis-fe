// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/LandingPage';
import ChatBoxPage from './pages/ChatBoxPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import MainLayout from './layout/mainLayout';

function App() {
  return (
    <Routes>
      {/* Halaman yang tidak pakai navbar */}
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />

      {/* Halaman yang pakai navbar */}
      <Route path='/'
      element={
        <MainLayout> 
          <LandingPage/>
        </MainLayout>
      }
      />
      <Route path="/chat"
      element={
        <MainLayout>
          <ChatBoxPage/>
        </MainLayout>
      }

      />
      <Route path="/about"
        element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        }
      />
      <Route path="/profile"
        element={
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
