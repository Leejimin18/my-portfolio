import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navigation from './components/common/navigation';
import HomePage from './pages/home-page';
import AboutMePage from './pages/about-me-page';
import ProjectsPage from './pages/projects-page';

/**
 * App 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <Navigation />
      <Box sx={{ width: '100%', flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
