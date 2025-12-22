import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../../features/users/userSlice";

export default function UserCrud() {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addUser({ id: Date.now(), name }));
    setName("");
  };

  const handleUpdate = () => {
    if (editId === null) return;

    dispatch(updateUser({ id: editId, name }));
    setEditId(null);
    setName("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">User CRUD</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mb-4">
        {editId ? (
          <button
            onClick={handleUpdate}
            className="px-4 py-2 mr-2 text-white bg-green-600 rounded hover:bg-green-700"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="px-4 py-2 mr-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Add
          </button>
        )}
      </div>

      {loading && (
        <p className="text-sm text-gray-600 mb-3">Loading...</p>
      )}

      <ul className="space-y-2">
        {users.map((u) => (
          <li
            key={u.id}
            className="flex items-center justify-between p-2 border rounded bg-white"
          >
            <span className="text-sm font-medium">{u.name}</span>

            <div className="space-x-2">
              <button
                onClick={() => {
                  setEditId(u.id);
                  setName(u.name);
                }}
                className="px-3 py-1 text-sm text-white bg-gray-600 rounded hover:bg-gray-700"
              >
                Edit
              </button>

              <button
                onClick={() => dispatch(deleteUser(u.id))}
                className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
