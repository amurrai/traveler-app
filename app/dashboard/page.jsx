import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if(session?.user) {
    return (
      <h1>Dashboard {session?.user.username}</h1>
    );
  }

  return (
    <h1>Please log in</h1>
  );
};

export default DashboardPage;