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

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="mx-auto mt-8 max-w-6xl overflow-x-auto">
      <table className="w-full border border-gray-200 text-sm shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Country</th>
            <th className="border px-4 py-2">Date Range</th>
            <th className="border px-4 py-2">Skills</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="hover:bg-gray-50 align-top">
              <td className="border px-4 py-2">{u.name}</td>
              <td className="border px-4 py-2">{u.email}</td>
              <td className="border px-4 py-2 capitalize">{u.gender}</td>
              <td className="border px-4 py-2 capitalize">{u.country}</td>

              <td className="border px-4 py-2 whitespace-nowrap">
                {formatDate(u.dateRange.startDate)}
                <br />
                <span className="text-gray-500">to</span>
                <br />
                {formatDate(u.dateRange.endDate)}
              </td>

              <td className="border px-4 py-2">
                {u.skills.length ? (
                  <div className="flex flex-wrap gap-1">
                    {u.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>

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
