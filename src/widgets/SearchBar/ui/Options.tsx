import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '@/app/appStore';
import { applyFilters, setAvatarColorFilter, setFriendsFilter, setPrivacyFilter } from '..';

export const Options = () => {
  const [groupOption, setGroupOption] = useState<string>('all');
  const [colorOption, setColorOption] = useState<string>('all');
  const [friendsOption, setFriendsOption] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const colors = useSelector((state: RootState) =>
    [...new Set(state.groups.groups.map((group) => group.avatar_color))].filter(
      (color) => color !== undefined,
    ),
  );
  useEffect(() => {
    dispatch(applyFilters());
  }, [groupOption, colorOption, friendsOption, dispatch]);

  const handleGroupFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroupOption(event.target.value);
    dispatch(setPrivacyFilter(event.target.value as 'open' | 'closed' | 'all'));
  };
  const handleColorFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setColorOption(event.target.value);
    dispatch(setAvatarColorFilter(event.target.value));
  };
  const handleFriendsFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFriendsOption(event.target.checked);
    dispatch(setFriendsFilter(event.target.checked));
  };
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <label className="block">
          <span className="text-gray-700">Group:</span>
          <select
            value={groupOption}
            onChange={handleGroupFilterChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </label>
      </div>
      <div>
        <label className="block">
          <span className="text-gray-700">Color:</span>
          <select
            value={colorOption}
            onChange={handleColorFilterChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="all">All</option>
            {colors &&
              colors.map((color) => (
                <option key={color} value={color}>
                  {color}{' '}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={friendsOption}
            onChange={handleFriendsFilterChange}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-gray-700">Friends in group</span>
        </label>
      </div>
    </div>
  );
};
