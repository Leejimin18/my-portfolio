import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const CONTACT_EMAIL = '00jimin01080@gmail.com';
const CONTACT_PHONE = '010-0000-0000';

const SNS_LINKS = [
  { label: 'GitHub', href: '#', icon: GitHubIcon, bgcolor: 'custom.warmGreen' },
  { label: 'LinkedIn', href: '#', icon: LinkedInIcon, bgcolor: 'custom.btnOrange' },
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, icon: EmailIcon, bgcolor: 'custom.warmLavender' },
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
        <EmailIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
        <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary' }}>{CONTACT_EMAIL}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <PhoneIcon sx={{ color: 'text.secondary', fontSize: '1.2rem' }} />
        <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary' }}>{CONTACT_PHONE}</Typography>
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
