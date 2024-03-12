import { useQuery } from '@tanstack/react-query';
import { Group } from '@/shared/model/types';
import { getGroups } from './getGroups';

export function GroupsQuery() {
  return useQuery({
    queryKey: ['groups'],
    queryFn: (): Promise<Group[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getGroups());
        }, 10);
      });
    },
  });
}
