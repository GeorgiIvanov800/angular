import { User } from './user';

export interface Theme {
  subscribers: string[];
  posts: string[];
  _id: string;
  userId: User;
  themeName: string;
  created_at: string;
  updatedAt: string;
  __v: number;
}
