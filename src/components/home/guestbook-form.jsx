import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmit - 방명록 작성 제출 함수, { name, message, email, rating }를 인자로 받고 성공 여부(boolean)를 반환 [Required]
 * @param {boolean} isSubmitting - 제출 중 여부 [Optional, 기본값: false]
 * @param {string} error - 에러 메시지 [Optional, 기본값: null]
 *
 * Example usage:
 * <GuestbookForm onSubmit={submitEntry} isSubmitting={isSubmitting} error={error} />
 */
const textFieldSx = {
  bgcolor: 'custom.textInverse',
  borderRadius: 1,
  '& .MuiInputBase-input:focus::placeholder': { opacity: 0 },
};

function GuestbookForm({ onSubmit, isSubmitting = false, error = null }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) {
      return;
    }

    const success = await onSubmit({ name: name.trim(), message: message.trim(), email: email.trim(), rating });

    if (success) {
      setName('');
      setMessage('');
      setEmail('');
      setRating(0);
      setIsDone(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          placeholder="이름"
          aria-label="이름"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          fullWidth
          sx={textFieldSx}
        />
        <TextField
          placeholder="메시지"
          aria-label="메시지"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          multiline
          minRows={3}
          fullWidth
          sx={textFieldSx}
        />
        <TextField
          placeholder="이메일 (선택, 비공개)"
          aria-label="이메일 (선택, 비공개)"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          fullWidth
          sx={textFieldSx}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography sx={{ fontSize: '0.9rem', opacity: 0.85 }}>별점</Typography>
          <Rating
            value={rating}
            onChange={(_event, value) => setRating(value)}
            sx={{
              color: 'custom.btnOrange',
              '& .MuiRating-iconEmpty': { color: 'custom.textInverse' },
            }}
          />
        </Box>
        {error && <Alert severity="error">{error}</Alert>}
        {isDone && !error && <Alert severity="success">방명록이 등록되었습니다.</Alert>}
        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            bgcolor: 'custom.bgCream',
            color: 'custom.btnPurple',
            alignSelf: 'flex-start',
            px: 4,
            '&:hover': { bgcolor: 'custom.bgCream', opacity: 0.85 },
          }}
        >
          {isSubmitting ? '등록 중...' : '남기기'}
        </Button>
      </Stack>
    </Box>
  );
}

export default GuestbookForm;
