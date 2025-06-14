import "@/styles/globals.css";
import { SessionProvider } from "@/context/SessionContext";
import React, { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
            
      <body className="text-white flex flex-col items-center justify-center bg-[#0b1215] h-screen">
          <SessionProvider>
            <Header />
            {children}
          </SessionProvider>
      </body>
    </html>
  );
}