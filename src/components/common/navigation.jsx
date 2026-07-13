import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

/**
 * Navigation 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Navigation />
 */
function Navigation() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: { xs: 1, md: 3 }, py: 1 }}>
        {NAV_ITEMS.map(({ label, path }) => (
          <Button
            key={path}
            component={NavLink}
            to={path}
            end={path === '/'}
            sx={{
              color: 'custom.textInverse',
              fontWeight: 500,
              fontSize: { xs: '0.85rem', md: '1rem' },
              '&.active': {
                textDecoration: 'underline',
                textUnderlineOffset: '6px',
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
