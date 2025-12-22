export interface User{
    id:number;
    name:string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}