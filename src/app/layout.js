import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Growquest",
  description: "Scaling your startup's ARR with outcome selling",
  icon:"./favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <div className="flex gap-0 h-full">
          <Navbar />
          <div className="flex flex-col w-full h-full">
            <main className="flex-grow bg-gray-100 h-full overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}