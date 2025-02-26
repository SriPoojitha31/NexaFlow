"use client";

import { SessionProvider } from "next-auth/react";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <SessionProvider>
          <Sidebar />
          <div className="flex-1 p-6">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
