import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GroupsPage } from '@/pages/Groups/ui/Page';
import { store } from './appStore';
import './index.css';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GroupsPage />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
