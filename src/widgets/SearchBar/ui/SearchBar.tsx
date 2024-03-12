import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { Input } from '@/shared/ui/Input/Input';
import { Options } from './Options';
import { applyFilters, setQuery } from '..';

export const SearchBar = () => {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 200);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuery(value));
    dispatch(applyFilters());
  }, [value, dispatch]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="flex items-center">
      <Input value={text} onChange={onChange} placeholder="Поиск.." />
      <Options />
    </div>
  );
};
