import { api } from '@/shared/lib/axiosInstance';
import { Group } from '@/shared/model/types';

export const getGroups = async () => (await api.get<Group[]>('groups')).data;
