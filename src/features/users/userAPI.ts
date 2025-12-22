import { User } from "@/types/users";

export const fetchUsersAPI = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
