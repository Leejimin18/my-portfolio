import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProjectThumbnailTile from '../projects/project-thumbnail-tile';
import useProjects from '../../hooks/use-projects';

const MAX_PREVIEW_COUNT = 4;

/**
 * ProjectsSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  const { projects, isLoading, error } = useProjects();
  const previewProjects = projects.slice(0, MAX_PREVIEW_COUNT);

  return (
    <Box component="section" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 600, mb: 2, color: 'text.primary' }}
        >
          Projects
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6, color: 'text.secondary', mb: 4 }}>
          지금까지 만든 프로젝트들을 소개합니다.
        </Typography>

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress sx={{ color: 'custom.btnPurple' }} />
          </Box>
        )}

        {!isLoading && error && (
          <Typography sx={{ color: 'error.main', mb: 4 }}>{error}</Typography>
        )}

        {!isLoading && !error && previewProjects.length > 0 && (
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {previewProjects.map((project) => (
              <Grid key={project.id} size={{ xs: 6, md: 3 }}>
                <ProjectThumbnailTile title={project.title} thumbnailUrl={project.thumbnail_url} />
              </Grid>
            ))}
          </Grid>
        )}

        <Button
          component={RouterLink}
          to="/projects"
          variant="contained"
          sx={{ bgcolor: 'custom.btnPurple', '&:hover': { bgcolor: 'primary.dark' } }}
        >
          더 보기
        </Button>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
