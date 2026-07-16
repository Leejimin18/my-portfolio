import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const THUMBNAILS = [1, 2, 3, 4];

/**
 * ProjectsSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
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
          여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 &apos;더 보기&apos; 버튼이 들어갈 예정입니다.
        </Typography>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {THUMBNAILS.map((num) => (
            <Grid key={num} size={{ xs: 6, md: 3 }}>
              <Paper
                sx={{
                  height: { xs: 80, md: 120 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'custom.bgCream',
                  color: 'text.secondary',
                }}
              >
                썸네일 {num}
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button
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
