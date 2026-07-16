import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

/**
 * useGuestbook 훅
 *
 * 방명록 목록 조회와 작성 기능을 제공합니다.
 *
 * Example usage:
 * const { entries, isLoading, isSubmitting, error, submitEntry } = useGuestbook();
 */
function useGuestbook() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const fetchEntries = useCallback(async () => {
    setIsLoading(true);
    const { data, error: fetchError } = await supabase
      .from('guestbook_public')
      .select('id, name, message, rating, created_at')
      .order('created_at', { ascending: false });

    if (fetchError) {
      setError('방명록을 불러오지 못했습니다.');
    } else {
      setEntries(data);
      setError(null);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const submitEntry = useCallback(
    async ({ name, message, email, rating }) => {
      setIsSubmitting(true);
      const { error: insertError } = await supabase.from('guestbook').insert({
        name,
        message,
        email: email || null,
        rating: rating || null,
      });
      setIsSubmitting(false);

      if (insertError) {
        setError('방명록 작성에 실패했습니다.');
        return false;
      }

      setError(null);
      await fetchEntries();
      return true;
    },
    [fetchEntries]
  );

  return { entries, isLoading, isSubmitting, error, submitEntry };
}

export default useGuestbook;
