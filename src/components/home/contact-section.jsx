import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

/**
 * ContactSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: 'custom.bgFooter', color: 'custom.textInverse', py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 600, mb: 2 }}
        >
          Contact
        </Typography>
        <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6, mb: 3 }}>
          여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <IconButton aria-label="GitHub" href="#" sx={{ color: 'custom.textInverse' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" href="#" sx={{ color: 'custom.textInverse' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Email" href="#" sx={{ color: 'custom.textInverse' }}>
            <EmailIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2}>
          <TextField
            placeholder="메시지를 입력해주세요"
            multiline
            minRows={3}
            fullWidth
            sx={{
              bgcolor: 'custom.textInverse',
              borderRadius: 1,
            }}
          />
          <Button
            variant="contained"
            sx={{ bgcolor: 'custom.btnGreen', alignSelf: 'center', px: 4 }}
          >
            보내기
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default ContactSection;
