import { auth } from "@/auth";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Profile</h1>

      <p className="mt-4">
        Welcome, {session?.user?.name}
      </p>

      <p>{session?.user?.email}</p>
      <div className="mt-6">
        <LogoutButton />
      </div>
    </main>
    
  );
}
