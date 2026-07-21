import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

/**
 * ProjectThumbnailTile 컴포넌트
 *
 * Props:
 * @param {string} title - 프로젝트 이름 [Required]
 * @param {string} thumbnailUrl - 썸네일 이미지 경로 [Required]
 *
 * Example usage:
 * <ProjectThumbnailTile title="맛집 공유 커뮤니티" thumbnailUrl="https://..." />
 */
function ProjectThumbnailTile({ title, thumbnailUrl }) {
  const [isThumbnailError, setIsThumbnailError] = useState(false);

  return (
    <Paper
      component={RouterLink}
      to="/projects"
      sx={{
        display: 'block',
        position: 'relative',
        height: { xs: 80, md: 120 },
        overflow: 'hidden',
        textDecoration: 'none',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          borderColor: 'custom.btnPurple',
          boxShadow: '0 0 12px 1px rgba(122, 0, 160, 0.5)',
        },
      }}
    >
      {isThumbnailError ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'custom.bgCream',
            color: 'text.secondary',
          }}
        >
          <ImageOutlinedIcon />
        </Box>
      ) : (
        <Box
          component="img"
          src={thumbnailUrl}
          alt={`${title} 썸네일`}
          onError={() => setIsThumbnailError(true)}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
      <Box
        sx={{
          position: 'absolute',
          insetInline: 0,
          bottom: 0,
          px: 1,
          py: 0.5,
          bgcolor: 'rgba(0, 0, 0, 0.55)',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '0.7rem', md: '0.8rem' },
            color: 'custom.textInverse',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}

export default ProjectThumbnailTile;
