import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

/**
 * useProjects 훅
 *
 * 게시된 프로젝트 목록을 sort_order 순으로 조회합니다.
 *
 * Example usage:
 * const { projects, isLoading, error } = useProjects();
 */
function useProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      const { data, error: fetchError } = await supabase
        .from('projects')
        .select('id, title, description, tech_stack, project_type, detail_url, thumbnail_url, sort_order')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (fetchError) {
        setError('프로젝트 목록을 불러오지 못했습니다.');
      } else {
        setProjects(data);
        setError(null);
      }
      setIsLoading(false);
    }

    fetchProjects();
  }, []);

  return { projects, isLoading, error };
}

export default useProjects;
