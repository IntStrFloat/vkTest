import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/appStore';
import { GroupList, GroupsQuery } from '@/widgets/GroupList';
import { SearchBar, applyFilters, setGroups } from '@/widgets/SearchBar';
export const GroupsPage = () => {
  const query = GroupsQuery();
  const dispatch = useDispatch<AppDispatch>();
  const determineResult = () => {
    const result = Math.random() < 0.1 ? 0 : 1;
    return result;
  };

  useEffect(() => {
    if (query.data) {
      console.log(query.data);
      dispatch(setGroups(query.data!));
    }
  }, [dispatch, query.data]);

  useEffect(() => {
    if (query.data) {
      dispatch(applyFilters());
    }
  }, [dispatch, query.data]);
  return (
    <div className="w-full max-w-[1360px] mx-auto">
      <div className="flex flex-col gap-3 justify-between items-center">
        <h1>GroupsPage</h1>
        <div>
          <SearchBar />
          {query.isLoading && <span>Загрузка...</span>}
          {query.isError && <span>Ошибка, перезагрузите страницу</span>}
          {query.isSuccess && <GroupList result={determineResult()} />}
        </div>
      </div>
    </div>
  );
};
