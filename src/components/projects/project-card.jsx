import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * ProjectCard 컴포넌트
 *
 * Props:
 * @param {string} title - 프로젝트 이름 [Required]
 * @param {string} description - 한 줄 설명 [Required]
 * @param {Array<string>} techStack - 기술 스택 목록 [Optional, 기본값: []]
 * @param {string} projectType - 개인/팀 여부 [Optional, 기본값: '개인']
 * @param {string} detailUrl - 배포된 사이트 링크 [Required]
 * @param {string} thumbnailUrl - 썸네일 이미지 경로 [Required]
 *
 * Example usage:
 * <ProjectCard title="맛집 공유 커뮤니티" description="..." techStack={['React']} projectType="개인" detailUrl="https://..." thumbnailUrl="https://..." />
 */
function ProjectCard({ title, description, techStack = [], projectType = '개인', detailUrl, thumbnailUrl }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          borderColor: 'custom.btnPurple',
          boxShadow: '0 0 16px 2px rgba(122, 0, 160, 0.5)',
        },
      }}
    >
      <Box
        component="img"
        src={thumbnailUrl}
        alt={`${title} 썸네일`}
        sx={{
          width: { xs: '100%', sm: 300 },
          height: 300,
          objectFit: 'cover',
          flexShrink: 0,
          bgcolor: 'custom.bgCream',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 1.5,
          p: { xs: 2, md: 3 },
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography component="h3" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 600, color: 'text.primary' }}>
            {title}
          </Typography>
          <Chip label={projectType} size="small" sx={{ bgcolor: 'custom.bgCream', color: 'text.secondary' }} />
        </Box>
        <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.6, color: 'text.secondary' }}>
          {description}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {techStack.map((tech) => (
            <Chip key={tech} label={tech} size="small" variant="outlined" />
          ))}
        </Stack>
        <Box>
          <Button
            variant="contained"
            endIcon={<OpenInNewIcon />}
            href={detailUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: 'custom.btnPurple',
              transition: 'transform 0.15s ease',
              '&:hover': { bgcolor: 'primary.dark' },
              '&:active': { transform: 'scale(0.96)' },
            }}
          >
            Live Demo
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProjectCard;
