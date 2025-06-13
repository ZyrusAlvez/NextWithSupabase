import "@/styles/globals.css";
import React, { ReactNode } from "react";

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
            
      <body className="w-full h-screen flex items-center justify-center bg-[#0b1215]">
          {children}
      </body>
    </html>
  );
}