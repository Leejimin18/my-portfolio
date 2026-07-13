import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * AboutSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutSection />
 */
function AboutSection() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: 'custom.bgCream', py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Card sx={{ p: { xs: 1, md: 2 } }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography
              component="h2"
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 600, mb: 2, color: 'text.primary' }}
            >
              About Me
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6, color: 'text.secondary', mb: 3 }}>
              여기는 About Me 섹션입니다. 간단한 자기소개와 &apos;더 알아보기&apos; 버튼이 들어갈 예정입니다.
            </Typography>
            <Button
              variant="contained"
              sx={{ bgcolor: 'custom.btnPurple', '&:hover': { bgcolor: 'primary.dark' } }}
            >
              더 알아보기
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutSection;
