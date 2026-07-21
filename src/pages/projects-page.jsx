import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProjectCard from '../components/projects/project-card';
import useProjects from '../hooks/use-projects';

/**
 * ProjectsPage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsPage />
 */
function ProjectsPage() {
  const { projects, isLoading, error } = useProjects();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          component="h1"
          sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 600, mb: 4, textAlign: 'center', color: 'text.primary' }}
        >
          Projects
        </Typography>

        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <CircularProgress sx={{ color: 'custom.btnPurple' }} />
          </Box>
        )}

        {!isLoading && error && (
          <Typography sx={{ textAlign: 'center', color: 'error.main' }}>{error}</Typography>
        )}

        {!isLoading && !error && projects.length === 0 && (
          <Typography sx={{ textAlign: 'center', color: 'text.secondary' }}>
            등록된 프로젝트가 없습니다.
          </Typography>
        )}

        {!isLoading && !error && projects.length > 0 && (
          <Stack spacing={3}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={project.tech_stack}
                projectType={project.project_type}
                detailUrl={project.detail_url}
                thumbnailUrl={project.thumbnail_url}
              />
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}

export default ProjectsPage;
