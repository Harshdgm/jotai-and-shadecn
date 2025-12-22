import axios from "axios";
import { User } from "@/types/users";

export const fetchUsersAPI = async (): Promise<User[]> => {
  const res = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return res.data;
};
