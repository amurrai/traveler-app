import { Asap } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";

const asap = Asap({ subsets: ["latin"] });

export const metadata = {
  title: "WanderQuest",
  description: "Enhance Your City Exploration with Custom Self-Guided Adventures!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={asap.className}>
      <body >
        <Provider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}