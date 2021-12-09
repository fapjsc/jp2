import { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

const useQuery = () => {
  // Media Query
  const tinyPoint = useMediaQuery({ query: '(max-width: 800px)' });
  const smallPoint = useMediaQuery({ query: '(max-width: 1024px)' });
  const mediumPoint = useMediaQuery({ query: '(max-width: 1366px)' });
  const largePoint = useMediaQuery({ query: '(min-width: 1920px)' });
  const superLargePoint = useMediaQuery({ query: '(min-width: 2560px)' });

  const point = useCallback(() => {
    if (superLargePoint) return 'superLarge';
    if (tinyPoint) return 'tiny';
    if (smallPoint) return 'small';
    if (mediumPoint) return 'medium';
    if (largePoint) return 'large';
    return 'default';
  }, [superLargePoint, tinyPoint, smallPoint, mediumPoint, largePoint]);

  const pointText = point();

  return pointText;
};

export default useQuery;
