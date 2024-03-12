import { useSelector } from 'react-redux';

import { RootState } from '@/app/appStore';
import { GroupItem } from '@/entities/Group/ui/Group';

export const GroupList = ({ result }: { result: number }) => {
  const filteredGroups = useSelector((state: RootState) => state.groups.filteredGroups);

  return (
    <>
      {result === 1 ? (
        <div className="flex flex-col gap-3 justify-between items-center">
          {filteredGroups.map((group) => (
            <GroupItem key={group.id} {...group} />
          ))}
        </div>
      ) : (
        <div className="flex items-center text-red-600">
          <span>Ошибка загрузки данных</span>
        </div>
      )}
    </>
  );
};
