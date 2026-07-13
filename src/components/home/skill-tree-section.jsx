import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * SkillTreeSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: 'custom.bgDark', color: 'custom.textInverse', py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 600, mb: 2 }}
        >
          Skill Tree
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
          여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
