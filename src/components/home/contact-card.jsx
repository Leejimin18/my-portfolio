import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SNS_LINKS = [
  { label: 'GitHub', href: '#', icon: GitHubIcon, bgcolor: 'custom.warmGreen' },
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon, bgcolor: 'custom.btnOrange' },
  { label: 'Email', href: '#', icon: EmailIcon, bgcolor: 'custom.warmYellow' },
];

/**
 * ContactCard 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactCard />
 */
function ContactCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: 'custom.cardBg',
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        height: '100%',
      }}
    >
      <Typography component="h3" sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 600, mb: 2 }}>
        연락처
      </Typography>
      <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary', mb: 3 }}>
        궁금한 점이나 함께 하고 싶은 프로젝트가 있다면 편하게 연락 주세요.
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <EmailIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
        <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary' }}>example@email.com</Typography>
      </Box>
      <Stack direction="row" spacing={1.5}>
        {SNS_LINKS.map(({ label, href, icon: Icon, bgcolor }) => (
          <IconButton
            key={label}
            aria-label={label}
            href={href}
            sx={{
              bgcolor,
              color: 'custom.textInverse',
              '&:hover': { opacity: 0.85, bgcolor },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Stack>
    </Paper>
  );
}

export default ContactCard;
