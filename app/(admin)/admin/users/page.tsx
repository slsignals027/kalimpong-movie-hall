import { prisma } from "@/lib/prisma";
import DeleteUserButton from "@/components/admin/DeleteUserButton";
import ChangeUserRoleButton from "@/components/admin/ChangeUserRoleButton";
export default async function UsersPage() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-7xl p-10">

      <h1 className="mb-8 text-3xl font-bold">
        User Management
      </h1>

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="border p-3">Name</th>

            <th className="border p-3">Email</th>

            <th className="border p-3">Mobile</th>

            <th className="border p-3">Role</th>

            <th className="border p-3">Joined</th>

            <th className="border p-3">Actions</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td className="border p-3">
                {user.name}
              </td>

              <td className="border p-3">
                {user.email}
              </td>

              <td className="border p-3">
                {user.mobile || "-"}
              </td>

              <td className="border p-3">

                {user.role === "ADMIN" ? (
                  <span className="font-semibold text-green-600">
                    ADMIN
                  </span>
                ) : (
                  "USER"
                )}

              </td>

              <td className="border p-3">
                {user.createdAt.toLocaleDateString("en-IN")}
              </td>

              <td className="border p-3 space-x-4">

                <ChangeUserRoleButton user={user} />

                <DeleteUserButton userId={user.id} />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}