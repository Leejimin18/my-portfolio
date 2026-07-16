import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ContactCard from './contact-card';
import GuestbookForm from './guestbook-form';
import GuestbookList from './guestbook-list';
import useGuestbook from '../../hooks/use-guestbook';

/**
 * ContactSection 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const { entries, isLoading, isSubmitting, error, submitEntry } = useGuestbook();

  return (
    <Box component="section" sx={{ bgcolor: 'custom.bgCream', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 600, mb: 1, textAlign: 'center' }}
        >
          Contact
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6, mb: { xs: 4, md: 6 }, textAlign: 'center', color: 'text.secondary' }}
        >
          방명록에 자유롭게 메시지를 남겨주세요.
        </Typography>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography component="h3" sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 600, mb: 2 }}>
              방명록
            </Typography>
            <GuestbookForm onSubmit={submitEntry} isSubmitting={isSubmitting} error={error} />
            <GuestbookList entries={entries} isLoading={isLoading} />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <ContactCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
