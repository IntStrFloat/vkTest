import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

interface User {
  first_name: string;
  last_name: string;
}

interface GroupsState {
  groups: Group[];
  filteredGroups: Group[];
  query: string;
  filters: {
    privacy: 'all' | 'closed' | 'open';
    avatarColor: 'all' | string;
    friends: boolean;
  };
}

const initialState: GroupsState = {
  groups: [],
  filteredGroups: [],
  filters: {
    privacy: 'all',
    avatarColor: 'all',
    friends: false,
  },
  query: '',
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups(state, action: PayloadAction<Group[]>) {
      state.groups = action.payload;
      state.filteredGroups = action.payload;
    },
    applyFilters(state) {
      const { privacy, avatarColor, friends } = state.filters;
      state.filteredGroups = state.groups.filter((group) => {
        return (
          (!state.query || group.name.toLowerCase().startsWith(state.query.toLowerCase())) &&
          (privacy === 'all' || group.closed === (privacy === 'closed')) &&
          (avatarColor === 'all' || group.avatar_color === avatarColor) &&
          (!friends || (friends && group.friends && group.friends.length > 0))
        );
      });
    },
    setPrivacyFilter(state, action: PayloadAction<GroupsState['filters']['privacy']>) {
      state.filters.privacy = action.payload;
    },
    setAvatarColorFilter(state, action: PayloadAction<GroupsState['filters']['avatarColor']>) {
      state.filters.avatarColor = action.payload;
    },
    setFriendsFilter(state, action: PayloadAction<GroupsState['filters']['friends']>) {
      state.filters.friends = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const {
  setQuery,
  setGroups,
  applyFilters,
  setPrivacyFilter,
  setAvatarColorFilter,
  setFriendsFilter,
} = groupsSlice.actions;
export default groupsSlice.reducer;
