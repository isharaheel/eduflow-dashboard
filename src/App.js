import React, { useContext } from 'react'; 
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import StdDashboard from './components/pages/Dashboard/StudentData/stdDashboard';
import AuthProvider, { AuthContext } from './components/pages/auth/Auth';
import TeacherDashboard from './components/pages/Dashboard/TeacherData/teacherDashboard';

const ProtectedRoute = ({ children, roleRequired }) => {
  const auth = useContext(AuthContext);

  if (!auth) return null; 

  const { isLoggedIn, role } = auth;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to={role === 'teacher' ? "/TeacherDashboard" : "/StudentDashboard"} />;
  }

  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/TeacherDashboard" element={
            <ProtectedRoute roleRequired="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          } />

          <Route path="/StudentDashboard" element={
            <ProtectedRoute roleRequired="student">
              <StdDashboard />
            </ProtectedRoute>
          } />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}