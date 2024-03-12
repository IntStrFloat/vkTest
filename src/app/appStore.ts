import { configureStore } from '@reduxjs/toolkit';
import { GroupReducer } from '@/widgets/SearchBar';
export const store = configureStore({
  reducer: { groups: GroupReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
