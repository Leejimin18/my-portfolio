import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {Array} entries - 방명록 목록 [{ id, name, message, rating, created_at }] [Required]
 * @param {boolean} isLoading - 로딩 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={isLoading} />
 */
function GuestbookList({ entries, isLoading = false }) {
  if (isLoading) {
    return (
      <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mt: 3 }}>
        방명록을 불러오는 중...
      </Typography>
    );
  }

  if (entries.length === 0) {
    return (
      <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mt: 3 }}>
        아직 남겨진 방명록이 없습니다. 첫 메시지를 남겨보세요!
      </Typography>
    );
  }

  return (
    <Stack spacing={1.5} sx={{ mt: 3 }}>
      {entries.map(({ id, name, message, rating, created_at: createdAt }) => (
        <Paper key={id} elevation={0} sx={{ bgcolor: 'custom.cardBg', borderRadius: 2, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
            <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{name}</Typography>
            <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>
              {new Date(createdAt).toLocaleString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Typography>
          </Box>
          {rating > 0 && <Rating value={rating} readOnly size="small" sx={{ color: 'custom.btnOrange', mb: 0.5 }} />}
          <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6 }}>{message}</Typography>
        </Paper>
      ))}
    </Stack>
  );
}

export default GuestbookList;
