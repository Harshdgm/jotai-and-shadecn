import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { startEdit, deleteUser } from "@/features/form/formSlice";

export default function UserTable() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.form.submitted);

  if (!users.length) {
    return (
      <p className="mt-6 text-center text-sm text-gray-500">
        No data submitted
      </p>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-4xl overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Country</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2 capitalize">{u.gender}</td>
              <td className="border px-4 py-2 capitalize">{u.country}</td>
              <td className="border px-4 py-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => dispatch(startEdit(i))}
                    className="rounded bg-yellow-500 px-3 py-1 text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(i))}
                    className="rounded bg-red-600 px-3 py-1 text-white"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
