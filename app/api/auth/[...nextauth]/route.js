import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// explicitly call NextAuth.default and CredentialsProvider.default 
// otherwise will result in TypeError from package.json "type": "module"
const handler = NextAuth.default(authOptions);

export {handler as GET, handler as POST} // every GET/POST will be handled by next-auth